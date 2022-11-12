import { User } from '../Models/User';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const photo = new User();
    await AppDataSource.manager.save(photo)
    return res.json(photo).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create
}