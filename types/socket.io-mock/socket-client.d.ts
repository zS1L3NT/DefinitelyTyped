import SocketMock from '.';
import Emitter from "../component-emitter"

declare class SocketClient extends Emitter {
    public connected: boolean;
    public disconnected: boolean;

    public constructor(socketMock: SocketMock);

    public fireEvent(eventKey: string, payload: any): void;

    public close(): this;

    public disconnect(): this;
}
