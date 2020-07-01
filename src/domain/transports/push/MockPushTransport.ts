import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:push:mock')

export class MockPushTransport implements Transport {
    static readonly VENDOR = 'mock_push'
    readonly mediumType = 'push'
    readonly vendor: string = MockPushTransport.VENDOR
    
    async send(messageBody: string, recipient: string) {
        log(`Sending message 
        ---------------
        ${messageBody}
        ---------------
        to ${recipient}
        `)
    }
    
}