import { Medium } from './Medium'

export class EmailMedium implements Medium {
    readonly type = "email"
    readonly maxlength: number = 16556;
    readonly maxsize: number  = 1024 * 1024 * 10; // 10mb
}