import SocketMock from '.';
import Emitter from '../component-emitter';

declare class SocketClient extends Emitter {
    public connected: boolean;
    public disconnected: boolean;

    /**
     * A mocking class for the Socket IO Client side
     * @param {SocketMock} socketMock
     */
    public constructor(socketMock: SocketMock);

    /**
     * Fire an event to the server
     * @param  {string}   eventKey -- The event key that needs to be attached
     * @param  {any}   payload -- The payload that needs to be attached to the emit
     */
    public fireEvent(eventKey: string, payload: any): void;

    /**
     * Close the socket
     */
    public close(): this;

    /**
     * Disconnet the socket alias for close
     */
    public disconnect(): this;
}
