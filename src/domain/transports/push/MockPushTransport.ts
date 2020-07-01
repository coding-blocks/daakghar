import debug from 'debug'
import { Transport } from "../Transport";

const log = debug('transport:push:mock')

export class MockPushTransport implements Transport {
    static readonly VENDOR = 'mock_push'
    readonly mediumType = 'push'
    readonly vendor: string = MockPushTransport.VENDOR
    
    async send(template: string, data: any, recipient: string) {
        log(`Sending template ${template} to ${recipient} with data ${data}`)
    }
    
}