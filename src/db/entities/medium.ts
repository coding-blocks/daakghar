import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Medium {

    /**
     * type of medium, like: 'sms', 'email', 'push'
     */
    @PrimaryColumn({ type: 'varchar', length: '10' })
    type: string;

    /**
     * max length of communication supported by this medium (eg: 140 for SMS)
     */
    @Column('integer')
    maxlength: number

    /**
     * max size (in bytes) of communication this medium supports
     */
    @Column('integer')
    maxsize: number

}