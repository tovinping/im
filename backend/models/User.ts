import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  account: string

  @Column()
  password: string

  @Column()
  email: string;

  @Column()
  avatar: string;

  @Column()
  chinesName: string

  @Column()
  pinyinName: string

}
