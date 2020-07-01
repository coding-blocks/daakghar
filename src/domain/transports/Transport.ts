import { MediumType } from "../mediums/Medium";


export interface Transport {

    /**
     * the type of medium for this this transport works
     */
    readonly mediumType: MediumType

    /**
     * Name of the transport, example 'SES', or 'SendGrid'
     */
    readonly vendor: string

    /**
     * The function that sends a template (rendered with the data) to the recipient
     */
    send(messageBody: string, recipient: any): Promise<any>

}