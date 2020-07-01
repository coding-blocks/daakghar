import { Medium } from './Medium'

export class SMSMedium implements Medium {
    readonly type = "sms"
    readonly maxlength: number = 140;
    readonly maxsize: number  = 4096;
}