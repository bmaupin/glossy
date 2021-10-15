import { Buffer } from 'node';

export interface ProduceOptions {
    facility?: string;
    severity?: string;
    host?: string;
    appName?: string;
    pid?: string | number;
    msgID?: string;
    type?: string;
}

export interface ProducerOptions {
    facility?: string;
    severity?: string;
    prival?: number;
    host?: string;
    appName?: string;
    pid?: string | number;
    date?: Date;
    time?: Date;
    msgID?: string;
    structuredData?: unknown;
    message?: string;
}

export interface ProducerCallback {
    (compiledMessage: string): void;
}

export class Produce {
    constructor(options: ProduceOptions | string);

    alert(options: ProducerOptions, callback?: ProducerCallback): string | void;

    crit(options: ProducerOptions, callback?: ProducerCallback): string | void;

    debug(options: ProducerOptions, callback?: ProducerCallback): string | void;

    emergency(options: ProducerOptions, callback?: ProducerCallback): string | void;

    info(options: ProducerOptions, callback?: ProducerCallback): string | void;

    notice(options: ProducerOptions, callback?: ProducerCallback): string | void;

    produce(options: ProducerOptions, callback?: ProducerCallback): string | void;

    warn(options: ProducerOptions, callback?: ProducerCallback): string | void;
}

export interface ParserCallBack {
    (parsedMessage: SyslogMessage): void;
}

export interface SyslogMessage {
    originalMessage: string;
    type: string;
    time: Date;
    message: string;
    host?: string | null;
    appName?: string | null;
    pid?: string | null;
    msgID?: string | null;
    structuredData?: unknown;
}

export namespace Parse {
    function parse(rawMessage: string | Buffer, callback?: ParserCallBack): SyslogMessage | void;
}
