import SocketMock from '.';

export default class SocketClient {
    public connected: boolean;
    public disconnected: boolean;

    public constructor(socketMock: SocketMock);

    public emit(eventKey: string, ...args: any[]);

    public fireEvent(eventKey: string, payload: any);

    public close(): SocketClient;

    public disconnect(): SocketClient;
}
