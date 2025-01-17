import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Answer } from '../../answers/entities/answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false })
  text: string;

  @Column({type: 'varchar', nullable: true})
  feedback: string;

  @Column({type: 'bigint', nullable: true})
  score: number;

  @OneToMany(() => Answer, answer => answer.relatedQuestion)
  answers: Answer[];
}
