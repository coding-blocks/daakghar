import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:sms:mock')

export class MockSMSTransport implements Transport {
    static readonly VENDOR = 'mock_sms'
    readonly mediumType = 'sms'
    readonly vendor: string = MockSMSTransport.VENDOR
    
    async send(template: string, data: any, recipient: string) {
        log(`Sending template ${template} to ${recipient} with data ${data}`)
    }
    
}