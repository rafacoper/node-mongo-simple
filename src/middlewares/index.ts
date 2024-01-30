import { Response, NextFunction } from 'express';
import { getUserBySessionToken } from '../models/users';

export const isAuthenticated = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { cookies } = req;
    const { 'authorization': sessionToken } = cookies;

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    req.identity = existingUser;

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isOwner = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { params, identity } = req;
    const { id } = params;
    const currentUserId = identity && identity._id;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
