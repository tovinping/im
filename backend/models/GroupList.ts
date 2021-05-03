import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class GroupList extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column()
  groupId: string

  @Column()
  account: string

}
