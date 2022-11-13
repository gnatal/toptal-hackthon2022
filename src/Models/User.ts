import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm"
import { QuizUser } from './Score'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @OneToMany(() => QuizUser, (scoreGame) => scoreGame.user)
  public score: QuizUser[]
}