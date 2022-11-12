import { User } from '../Models/User';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {
  try {
    const user = new User();
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
    const users = await AppDataSource.manager.find(User)
    return res.json(users).status(200)
  } catch (e) {
    return res.json(`fail ${e.message}`).status(500)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    // const users = AppDataSource.manager.findOne(User, {
    //   where: {
    //     id: id
    //   }
    // })
    await AppDataSource.manager.save(id)
    return res.json(id).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const user = new User();
    const { username } = req.body;
    user.username = username
    await AppDataSource.manager.save(user)
    return res.json(user).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const deleteById = async (req: Request, res: Response) => {
  try {
    const user = new User();
    const { username } = req.body;
    user.username = username
    await AppDataSource.manager.save(user)
    return res.json(user).status(200)
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