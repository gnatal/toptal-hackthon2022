import { Question } from '../Models/Question';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const question = new Question();
    const { statement } = req.body;
    question.statement = statement
    await AppDataSource.manager.save(question)
    return res.json(question).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const questions = await AppDataSource.manager.find(Question)
    return res.json(questions).status(200)
  } catch (e) {
    return res.json(`fail ${e.message}`).status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const question = await AppDataSource.manager.findOneBy(Question, {
      id: Number(id)
    })
    return res.json(question).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const question = await AppDataSource.manager.findOneBy(Question, {
      id: Number(id)
    })
    if (!question) return res.json('Not found').status(404)
    const { statement } = req.body;
    question.statement = statement;
    await AppDataSource.manager.update(Question, id, question)
    return res.json(question).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await AppDataSource.manager.delete(Question, { id: id })
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