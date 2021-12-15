import express, { Router } from 'express';
import * as AuthController from '../controllers/Auth.controllers';

const router: Router = express.Router();

/**
 * @api {get} /api/auth
 * @description Test route for auth
 * @apiName TestRoute
 * @apiGroup Auth
 */
router.get('/', AuthController.base);

/**
 * @api {post} /api/auth/login
 * @description Login user
 * @apiName Login
 * @apiGroup Auth
 * @apiParam {String} email
 * @apiParam {String} password
 */
router.post('/login', AuthController.login);

/**
 * @api {post} /api/auth/register
 * @description Register user
 * @apiName Register
 * @apiGroup Auth
 * @apiParam {String} email
 * @apiParam {String} password
 * @apiParam {String} username
 */
router.post('/register', AuthController.register);

/**
 * @api {get} /api/auth/logout
 * @description Logout user
 * @apiName Logout
 * @apiGroup Auth
 */
router.get('/logout', AuthController.logout);

/**
 * @api {post} /api/auth/isLoggedIn
 * @description Check if user is signed in
 * @apiName IsSignIn
 * @apiGroup Auth
 */
router.get('/isLoggedIn', AuthController.isLoggedIn);

module.exports = router;
