import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:email:mock')

export class MockEmailTransport implements Transport {
    static readonly VENDOR = 'mock_email'
    readonly mediumType = 'email'
    readonly vendor: string = MockEmailTransport.VENDOR
    
    async send(template: string, data: any, recipient: string) {
        log(`Sending template ${template} to ${recipient} with data ${data}`)
    }
    
}