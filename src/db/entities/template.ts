import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MediumType, MEDIUMS_LIST } from "../../domain/mediums/Medium";
import hbs from 'handlebars'

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

    render(templateParams: {[x: string]: string}) {
        if (!templateParams) {
            throw new MissingPlaceholderException('template params missing to render template')
        }
        
        for (let placeholder of this.placeholders) {
            if (!templateParams[placeholder]) {
                throw new MissingPlaceholderException(`No data sent for placeholder = ${placeholder}`)
            }
        }
    
        try {
            return hbs.compile(this.data)((templateParams))
        } catch (err) {
            throw new HbsRenderingException(err)
        }
    
    }
}

export class MissingPlaceholderException extends Error {}
export class HbsRenderingException extends Error {
    constructor(err: Error) {
        super(err.message)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HbsRenderingException)
        }
        this.stack = this.stack || ""
        this.stack += err.stack
    }
}