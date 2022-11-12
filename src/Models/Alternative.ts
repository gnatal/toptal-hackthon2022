import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Question } from './Question'
@Entity()
export class Alternative {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  statement: string

  @Column()
  is_correct: boolean

  @ManyToOne(() => Question, (question) => question.alternatives)
  question: Question

}
