import { Score } from '../Models/Score';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    // const { username } = req.body;
    // user.username = username
    // await AppDataSource.manager.save(user)
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create
}