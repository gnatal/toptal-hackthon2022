import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Quiz } from './Quiz'
import { User } from './User'

@Entity()
export class QuizUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  @ManyToOne(() => User, (user) => user.score)
  public user: User

  @ManyToOne(() => Quiz, (quiz) => quiz.score)
  public quiz: Quiz
}