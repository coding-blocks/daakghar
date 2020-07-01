import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Template } from "./template";
import { Recipient } from "./recipient";
import { MediumType } from "../../domain/mediums/Medium";

@Entity()
export class Message {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Template, { eager: true })
    template: Template

    @ManyToOne(type => Recipient)
    recipient: Recipient

    get mediumType(): MediumType {
        return this.template.mediumType
    }

    @Column('json')
    templateData: { [x: string]: string }
}