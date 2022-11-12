import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import { Alternative } from './Alternative'
import { Quiz } from './Quiz';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  statement: string

  @OneToMany(() => Alternative, (alternative) => alternative.question)
  alternatives: Alternative[]

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz
}