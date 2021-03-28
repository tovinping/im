import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column({unique: true})
  conversationId: string

  @Column()
  owner: string;

  @Column()
  type: '0' | '1'

  @Column({default: ''})
  lastMsgId: string;

  @Column()
  topState: '0' | '1';

}
