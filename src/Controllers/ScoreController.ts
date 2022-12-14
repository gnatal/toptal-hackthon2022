import { QuizUser } from '../Models/Score';
import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { User } from '../Models/User';
import { Quiz } from '../Models/Quiz';

const create = async (req: Request, res: Response) => {
  try {
    const score = new QuizUser();
    const { value, userId, quizId } = req.body;
    const user = await AppDataSource.manager.findOneBy(User, {
      id: userId
    })
    if (!user) return res.json('User not found').status(404)
    const quiz = await AppDataSource.manager.findOneBy(Quiz, {
      id: quizId
    })
    if (!quiz) return res.json('Quiz not found').status(404)
    score.value = value;
    score.quiz = quiz;
    score.user = user;
    await AppDataSource.manager.save(score);
    return res.json(score).status(200)
  } catch (e) {
    return res.json(`Failed: ${e.message}`).status(500)
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const scores = await AppDataSource.manager.find(QuizUser, {
      relations: ['user', 'quiz']
    })
    return res.json(scores).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

const getUserScores = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await AppDataSource.manager.findOneBy(User, {
      id: Number(userId)
    })
    if (!user) return res.json('User not found').status(404)
    const scores = await AppDataSource.manager.findOne(QuizUser, {
      where: {
        user: user
      },
      relations: ['quiz']
    })
    return res.json(scores).status(200)
  } catch (e) {
    return res.json(`Failed: ${e.message}`).status(500)
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const score = new QuizUser();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}


const deleteById = async (req: Request, res: Response) => {
  try {
    const score = new QuizUser();
    return res.json(score).status(200)
  } catch (e) {
    return res.json('fail').status(500)
  }
}

export default {
  create,
  get,
  getUserScores,
  update,
  deleteById
}