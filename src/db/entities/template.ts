import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Medium } from "./medium";

@Entity()
export class Template {

    @PrimaryGeneratedColumn('increment')
    id: number;

    /**
     * This is the template data, should be a handlebars string
     * eg: `Hello {{user}} how are you ?`
     */
    @Column('text')
    data: string

    /**
     * Array of template placeholders
     * eg: ['user']
     */
    @Column('text', { array: true })
    placeholders: Array<string>

    /**
     * The kind of medium this template is for
     */
    @ManyToOne(type => Medium)
    medium: Medium

}