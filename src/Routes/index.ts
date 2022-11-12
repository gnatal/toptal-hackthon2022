import { Router } from 'express'
import UserController from '../Controllers/UserController';
import ScoreController from '../Controllers/ScoreController';
import QuizController from '../Controllers/QuizController';
import AlternativeController from '../Controllers/AlternativeController';

const routes = Router()

routes.get('/', (req, res) => {
  return res.send('Hello world').status(200)
});

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

// Users routes
routes.post('/user', UserController.create)
routes.get('/user', UserController.get)
routes.get('/user/:id', UserController.getById)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.deleteById)

// Alternatives routes
routes.post('/alternative', AlternativeController.create)
routes.get('/alternative', AlternativeController.get)
routes.get('/alternative/:id', AlternativeController.getById)
routes.put('/alternative/:id', AlternativeController.update)
routes.delete('/alternative/:id', AlternativeController.deleteById)

// Quiz routes
routes.post('/quiz', QuizController.create)
routes.get('/quiz', QuizController.get)
routes.get('/quiz/:id', QuizController.getById)
routes.put('/quiz/:id', QuizController.update)
routes.delete('/quiz/:id', QuizController.deleteById)


routes.post('/quiz', QuizController.create)
routes.post('/score', ScoreController.create)

export default routes
