
export const MEDIUMS_LIST = <const> ['sms' , 'email' , 'push']
export type MediumType = typeof MEDIUMS_LIST[number]
export interface Medium {
    /**
     * type of medium, like: 'sms', 'email', 'push'
     */
    readonly type: MediumType

    /**
     * max length of communication supported by this medium (eg: 140 for SMS)
     */
    readonly maxlength: number


    /**
     * max size (in bytes) of communication this medium supports
     */
    readonly maxsize: number
}