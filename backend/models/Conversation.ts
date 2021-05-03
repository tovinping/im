import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column({unique: true})
  conversationId: string

  @Column()
  owner: string;

  @Column({default: '0'})
  type: '0' | '1' // 0单聊1群聊天

  @Column({default: ''})
  lastMsgId: string;

  @Column({default: '0'})
  topState: '0' | '1';

}
