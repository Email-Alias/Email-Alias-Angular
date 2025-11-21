import {Messages} from "./messages.js";

export type Config = {
    registered: boolean,
    messages: Messages,
    colorScheme: number,
    isPhone: boolean,
    emails: string,
}

export enum ColorScheme {
    system,
    light,
    dark
}
