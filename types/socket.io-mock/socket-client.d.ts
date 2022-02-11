import SocketMock from '.';

export default class SocketClient {
    public connected: boolean;
    public disconnected: boolean;

    public constructor(socketMock: SocketMock);

    public emit(eventKey: string, ...args: any[]): void;

    public fireEvent(eventKey: string, payload: any): void;

    public close(): this;

    public disconnect(): this;
}
