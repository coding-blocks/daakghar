import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Recipient {

    // TODO: add firstname, lastname

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('integer', { name: 'oneauth_id', unique: true, nullable: true })
    oneauthId: number

    @Column('varchar', { unique: true, length: 75 })
    email: string

    @Column('varchar', { unique: true, length: 15 })
    phno: string

    // TODO: onesignal playerid, fcm id lauda lahsun

    @Column({default: false})
    dndEmail: boolean

    @Column({default: false})
    dndSMS: boolean

}