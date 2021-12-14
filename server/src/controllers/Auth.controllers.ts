import { Request, Response } from 'express';
import { IHelloMessage } from '../types/types';
import User from '../models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const base = (req: Request, res: Response) => {
  const helloMessage: IHelloMessage = { msg: 'Auth Route' };
  res.json(helloMessage);
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json({ status: 403, msg: 'User Not Found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(403).json({ status: 403, msg: 'Incorrect Password' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res
      .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
      .json({ status: 200, msg: 'User Logged In Successfully' });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(403).json({ status: 403, msg: 'User Already Exists found' });
    const hashedPassword = await bcrypt.hash(password);
    const newUser = new User({ email, password: hashedPassword, username, role: 'user' });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    res
      .cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
      .json({ status: 200, msg: 'User Created Successfully' });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie('token').json({ status: 200, msg: 'User Logged Out Successfully' });
};

const isSignIn = (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(403).json({ status: 403, msg: 'User Not Signed In', value: false });
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ status: 200, msg: 'User Signed In', value: true });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ status: 500, msg: 'Server Error', value: false });
  }
};

export default { base, login, register, logout, isSignIn };
