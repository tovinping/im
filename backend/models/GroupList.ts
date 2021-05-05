import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column()
  groupId: string

  @Column()
  account: string // 此群归属谁---------需要解决每个群成员都需要存一次吗?

}
