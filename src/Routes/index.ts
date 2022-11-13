import { Router } from 'express'
import UserController from '../Controllers/UserController';
import ScoreController from '../Controllers/ScoreController';
import QuizController from '../Controllers/QuizController';
import AlternativeController from '../Controllers/AlternativeController';
import QuestionController from '../Controllers/QuestionController';
import CategoryController from '../Controllers/CategoryController';

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

// question routes
routes.post('/question', QuestionController.create)
routes.get('/question', QuestionController.get)
routes.get('/question/:id', QuestionController.getById)
routes.put('/question/:id', QuestionController.update)
routes.delete('/question/:id', QuestionController.deleteById)

// question routes
routes.post('/category', CategoryController.create)
routes.get('/category', CategoryController.get)
routes.get('/category/:id', CategoryController.getById)
routes.put('/category/:id', CategoryController.update)
routes.delete('/category/:id', CategoryController.deleteById)


// Score routes
routes.post('/score', ScoreController.create)
routes.get('/score', ScoreController.get)
routes.get('/score/:userId', ScoreController.getUserScores)
routes.put('/score/:id', ScoreController.update)
routes.delete('/score/:id', ScoreController.deleteById)


export default routes
