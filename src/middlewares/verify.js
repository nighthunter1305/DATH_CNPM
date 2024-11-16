import { StatusCodes } from 'http-status-codes';
import { getOne } from '~/database/query';
import jwt from 'jsonwebtoken';
import { env } from '~/config/env';

export const auth = (permission) => {
  return async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
      return res.status(StatusCodes.FORBIDDEN).json('You must login first.');
    }

    const user = await getOne('users', userId);

    if (!user) {
      return res.status(StatusCodes.FORBIDDEN).json('You must login first.');
    }

    const { role } = user;

    if (!permission.include(role)) {
      return res.status(StatusCodes.UNAUTHORIZED).json('You dont have permission to do this action.');
    }
  };
};

export const verify = async (req, res, next) => {
  try {
    console.log(req.headers);

    const authHeader = req.headers['cookie'];

    if (!authHeader) return res.sendStatus(401);
    const cookie = authHeader.split('=')[1];

    jwt.verify(cookie, env.SECRET_ACCESS_TOKEN, async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: 'This session has expired. Please login' });
      }

      console.log(decoded);
      next();
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      code: 500,
      data: [],
      message: err
    });
  }
}

