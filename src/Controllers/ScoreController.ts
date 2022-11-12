import { Score } from '../Models/Score';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const deleteById = async (req: Request, res: Response) => {
  try {
    const score = new Score();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create,
  get,
  getById,
  update,
  deleteById
}