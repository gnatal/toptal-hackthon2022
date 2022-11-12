import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm"
import { Categories } from './Categories';
import { Question } from './Question'
@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[]

  @ManyToMany(() => Categories, (categories) => categories.quizes)
  category: Categories
}