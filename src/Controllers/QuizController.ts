import { Quiz } from '../Models/Quiz';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const quiz = new Quiz();
    const { name } = req.body;
    quiz.name = name;
    await AppDataSource.manager.save(quiz)
    return res.json(quiz).status(200)
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
    const { id } = req.params
    const quizes = await AppDataSource.manager.findOneBy(Quiz, {
      id: Number(id)
    });
    return res.json(quizes).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const quiz = await AppDataSource.manager.findOneBy(Quiz, {
      id: Number(id)
    });
    if (!quiz) return res.json('Not found').status(404)
    const { name } = req.body;
    quiz.name = name;
    await AppDataSource.manager.update(Quiz, id, quiz)
    return res.json(quiz).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await AppDataSource.manager.delete(Quiz, id)
    return res.json(deleted).status(200)
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