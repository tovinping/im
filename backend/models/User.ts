import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({unique: true})
  account: string

  @Column()
  password: string

  @Column({default: ''})
  email: string;

  @Column({default: ''})
  avatar: string;

  @Column({default: ''})
  chinesName: string

  @Column({default: ''})
  pinyinName: string

}
