import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  statement: string
}