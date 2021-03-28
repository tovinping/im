import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column({unique: true})
  groupId: string

  @Column()
  name: string

  @Column()
  state: '0' | '1' //0正常1已解散

  @Column()
  muteState: '0' | '1' // 0正常1全员禁言

  @Column()
  avatar: string

  @Column()
  notice: string

  @Column({default: ''})
  owner: string

}
