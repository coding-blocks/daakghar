import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:sms:mock')

export class MockSMSTransport implements Transport {
    static readonly VENDOR = 'mock_sms'
    readonly mediumType = 'sms'
    readonly vendor: string = MockSMSTransport.VENDOR
    
    async send(messageBody: string, recipient: string) {
        log(`Sending message 
        ---------------
        ${messageBody}
        ---------------
        to ${recipient}
        `)
    }
    
}