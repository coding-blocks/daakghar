import { MediumType, Medium } from "./Medium";
import { EmailMedium } from "./EmailMedium";
import { PushMedium } from "./PushMedium";
import { SMSMedium } from "./SMSMedium";

export const mediums: { [m in MediumType]: Medium } = {
    email: new EmailMedium(),
    push: new PushMedium(),
    sms: new SMSMedium()
}