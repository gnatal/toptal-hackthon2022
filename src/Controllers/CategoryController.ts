import { Categories } from '../Models/Categories';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const category = new Categories();
    const { name } = req.body;
    category.name = name;
    await AppDataSource.manager.save(category)
    return res.json(category).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const categories = await AppDataSource.manager.find(Categories)
    return res.json(categories).status(200)
  } catch (e) {
    return res.json(`fail ${e.message}`).status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const alternative = await AppDataSource.manager.findOneBy(Categories, {
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
    const categories = await AppDataSource.manager.findOneBy(Categories, { id: Number(id) });
    if (!categories) throw new Error('Not found');
    const { name } = req.body;
    categories.name = name;
    await AppDataSource.manager.update(Categories, id, categories)
    return res.json(categories).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await AppDataSource.manager.delete(Categories, id)
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