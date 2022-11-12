import { Question } from '../Models/Question';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const user = new Question();
    const { username } = req.body;
    user.username = username
    await AppDataSource.manager.save(user)
    return res.json(user).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const users = await AppDataSource.manager.find(Question)
    return res.json(users).status(200)
  } catch (e) {
    return res.json(`fail ${e.message}`).status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const users = await AppDataSource.manager.findOneBy(Question, {
      id: Number(id)
    })
    return res.json(users).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const question = new Question();
    const { username } = req.body;
    const { id } = req.params;
    question.statement = username;
    await AppDataSource.manager.update(Question, id, question)
    return res.json(question).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const deleteById = async (req: Request, res: Response) => {
  try {
    const question = new Question();
    const { username } = req.body;
    await AppDataSource.manager.save(question)
    return res.json(question).status(200)
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