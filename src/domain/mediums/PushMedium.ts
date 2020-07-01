import { Medium } from './Medium'

export class PushMedium implements Medium {
    readonly type = "push"
    readonly maxlength: number = 2048;
    readonly maxsize: number  = 1024 * 4; // 4kb
}