import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Alternative {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  statement: string

  @Column()
  is_correct: boolean

}
