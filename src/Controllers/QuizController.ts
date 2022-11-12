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

const get = async (req: Request, res: Response) => {
  try {
    const quizes = await AppDataSource.manager.find(Quiz);
    return res.json(quizes).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const getById = async (req: Request, res: Response) => {
  try {
    const quiz = new Quiz();
    // user.username = username
    // await AppDataSource.manager.save(user)
    return res.json(v).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const update = async (req: Request, res: Response) => {
  try {
    const quiz = new Quiz();
    // user.username = username
    // await AppDataSource.manager.save(user)
    return res.json(quiz).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const deleteById = async (req: Request, res: Response) => {
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
  create,
  get,
  getById,
  deleteById,
  update
}