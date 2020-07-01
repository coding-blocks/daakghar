import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:email:mock')

export class MockEmailTransport implements Transport {
    static readonly VENDOR = 'mock_email'
    readonly mediumType = 'email'
    readonly vendor: string = MockEmailTransport.VENDOR
    
    async send(messageBody: string, recipient: string) {
        log(`Sending message 
        ---------------
        ${messageBody}
        ---------------
        to ${recipient}
        `)
    }
    
}