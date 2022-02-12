import SocketMock from '.';
import Emitter from '../component-emitter';

declare class SocketClient extends Emitter {
    /**
     * Connection state of the client.
     */
    public connected: boolean;
    /**
     * Connection state of the client.
     */
    public disconnected: boolean;

    /**
     * A mocking class for the Socket IO Client side
     * @param {SocketMock} socketMock
     */
    public constructor(socketMock: SocketMock);

    /**
     * Fire an event to the server
     * @param  {string}   eventKey -- The event key that needs to be attached
     * @param  {any}      payload -- The payload that needs to be attached to the emit
     */
    public fireEvent(eventKey: string, payload: any): void;

    /**
     * Close the socket.
     */
    public close(): this;

    /**
     * Alias for closing the socket.
     * @alias SocketClient.close()
     */
    public disconnect(): this;
}
