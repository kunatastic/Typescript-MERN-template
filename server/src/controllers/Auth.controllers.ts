import { Request, Response } from 'express';
import { IHelloMessage } from '../types/types';
import User from '../models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 *
 * @param req {Request}
 * @param res {Response}
 * @returns {Promise<IHelloMessage>}
 *
 * @api {get} /api/auth
 * @description Test route for auth
 * @apiName TestRoute
 * @apiGroup Auth
 */
export const base = (req: Request, res: Response) => {
  const authMessage: IHelloMessage = { msg: 'Auth Route' };
  res.json(authMessage);
};

/**
 *
 * @param req {Request}
 * @param res {Response}
 * @returns {}
 *
 * @api {post} /api/auth/login
 * @description Login user
 * @apiName Login
 * @apiGroup Auth
 */
export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json({ status: 403, msg: 'User Not Found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(403).json({ status: 403, msg: 'Incorrect Password' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({ status: 200, msg: 'User Logged In Successfully', token });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/**
 *
 * @param req {Request}
 * @param res {Response}
 * @returns {}
 *
 * @api {post} /api/auth/register
 * @description Register user
 * @apiName Register
 * @apiGroup Auth
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(403).json({ status: 403, msg: 'User Already Exists found' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, username, role: 'user' });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    res
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === 'production',
      })
      .json({ status: 200, msg: 'User Created Successfully' });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/**
 *
 * @param req {Request}
 * @param res {Response}
 * @returns clear cookie
 *
 * @api {get} /api/auth/logout
 * @description Logout user
 * @apiName Logout
 * @apiGroup Auth
 */
export const logout = (req: Request, res: Response) => {
  res.clearCookie('token').json({ status: 200, msg: 'User Logged Out Successfully' });
};

/**
 *
 * @param req {Request}
 * @param res {Response}
 * @returns Boolean
 *
 * @api {post} /api/auth/isLoggedIn
 * @description Check if user is signed in
 * @apiName IsSignIn
 * @apiGroup Auth
 */
export const isLoggedIn = (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(403).json({ status: 403, msg: 'User Not Signed In', value: false });
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ status: 200, msg: 'User Signed In', value: true });
  } catch (err: any) {
    console.error(err.message);
    res.status(403).json({ status: 403, msg: 'No token found', value: false });
  }
};
