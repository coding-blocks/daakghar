import { MediumType } from "../mediums/Medium";
import { Transport } from "./Transport";
import { MockEmailTransport } from "./email/MockEmailTransport";
import { MockSMSTransport } from "./sms/MockSMSTransport";
import { MockPushTransport } from "./push/MockPushTransport";

export const transports: { [m in MediumType]: {[t: string]: Transport}} = {
    sms: {
        [MockSMSTransport.VENDOR]: new MockSMSTransport()
    },
    email: {
        [MockEmailTransport.VENDOR]: new MockEmailTransport()
    },
    push: {
        [MockPushTransport.VENDOR]: new MockPushTransport()
    }
}