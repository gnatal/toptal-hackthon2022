import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Quiz } from './Quiz'

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Quiz, (quiz) => quiz.category)
  quizes: Quiz[]
}