import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MediumType, MEDIUMS_LIST } from "../../domain/mediums/Medium";

@Entity()
export class Template {

    @PrimaryGeneratedColumn('increment')
    id: number;

    /**
     * This is the template data, should be a handlebars string
     * eg: `Hello {{user}} how are you ?`
     */
    @Column('text', { nullable: false })
    data: string

    /**
     * Array of template placeholders
     * eg: ['user']
     */
    @Column('text', { array: true })
    placeholders: Array<string>

    @Column('simple-enum', { enum: MEDIUMS_LIST })
    mediumType: MediumType

}