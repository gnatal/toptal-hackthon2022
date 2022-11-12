import { Router } from 'express'
import UserController from '../Controllers/UserController';
import ScoreController from '../Controllers/ScoreController';
import QuizController from '../Controllers/QuizController';

const routes = Router()

routes.get('/', (req, res) => {
  return res.send('Hello world').status(200)
});

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

routes.post('/user', UserController.create)
routes.get('/user', UserController.get)
routes.put('/user', UserController.update)
routes.delete('/user/:id', UserController.deleteById)

routes.post('/quiz', QuizController.create)
routes.post('/score', ScoreController.create)

export default routes
