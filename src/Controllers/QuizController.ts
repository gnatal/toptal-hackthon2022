import { Quiz } from '../Models/Quiz';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const quiz = new Quiz();
    // user.username = username
    // await AppDataSource.manager.save(user)
    return res.json(v).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create
}