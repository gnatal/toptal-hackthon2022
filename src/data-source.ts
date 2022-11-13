import "reflect-metadata"
import { DataSource } from 'typeorm';
import { User } from './Models/User';
import { Quiz } from './Models/Quiz';
import { Question } from './Models/Question';
import { Alternative } from './Models/Alternative';
import { QuizUser } from './Models/Score';
import { Categories } from './Models/Categories';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "testorm",
  password: "password123",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [User, Quiz, Categories, Alternative, Question, QuizUser],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))