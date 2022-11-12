import { Alternative } from '../Models/Alternative';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { Quiz } from '../Models/Quiz';
import { Question } from '../Models/Question';

const create = async (req: Request, res: Response) => {
  try {
    const alternative = new Alternative();
    const { statement, isCorrect, questionId } = req.body;
    const question = await AppDataSource.manager.findOneBy(Question, {
      id: Number(questionId)
    })
    if (!question) return res.json('Question not found').status(404)
    alternative.is_correct = isCorrect;
    alternative.statement = statement;
    alternative.question = question;
    await AppDataSource.manager.save(alternative)
    return res.json(alternative).status(200)
  } catch (e) {
    return res.json(`error ${e.message}`).status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const alternative = await AppDataSource.manager.find(Alternative)
    return res.json(alternative).status(200)
  } catch (e) {
    return res.json(`fail ${e.message}`).status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const alternative = await AppDataSource.manager.findOneBy(Alternative, {
      id: Number(id)
    })
    return res.json(alternative).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const alternative = await AppDataSource.manager.findOneBy(Alternative, { id: Number(id) });
    if (!alternative) throw new Error('Not found');
    const { statement, isCorrect } = req.body;
    alternative.statement = statement;
    alternative.is_correct = isCorrect
    await AppDataSource.manager.update(Alternative, id, alternative)
    return res.json(alternative).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await AppDataSource.manager.delete(Alternative, id)
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