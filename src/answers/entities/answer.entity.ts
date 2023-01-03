import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Question } from "src/questions/entities/question.entity";


@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  text: string;

  @Column({ type: 'boolean', nullable: true })
  isCorrect: boolean;

  @Column({ type: 'int', nullable: true })
  questionId: number;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'questionId' })
  relatedQuestion: Question;
}