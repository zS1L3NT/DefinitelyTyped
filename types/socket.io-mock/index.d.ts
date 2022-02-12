import {SocketClient} from "./socket-client";
import Emitter from "../component-emitter";

export = SocketMock

/**
 * Mock server client for socket.io.
 */
declare class SocketMock extends Emitter {
    /**
     * The array of room keys that we have currently joined.
     */
    public rooms: string[];
    /**
     * The array of room keys that we have currently joined.
     */
    public joinedRooms: string[];
    /**
     * Access a specific room and broadcast to it.
     */
    public broadcast: Broadcast;
    /**
     * Access the socket client.
     */
    public socketClient: SocketClient;
    /**
     * Register general callbacks for desired events.
     * Useful for functions that we want to trigger regardless of returned results.
     * This is denoted by:
     * @example
     * {
     *      event1: (data, roomKey) => {
     *         // do something
     *      },
     *
     *      event2: (data, roomKey) => {
     *         // do something else
     *      }
     * }
     */
    public generalCallbacks: Record<string, (data: any, roomKey: string) => void>

    public constructor();

    /**
     * Emit an event to the server (used by client)
     * @param  {string} eventKey -- The event key
     * @param  {any[]}  args -- Additional payload
     * @param  {(...data: any[]) => void} ack -- The ack argument is optional. When server call it payload reply will be delivered to client
     */
    public emitEvent(eventKey: string, args: any[], ack?: (...data: any[]) => void): void;

    /**
     * Register on every event that the server sends
     * @param {string} eventKey
     * @param {(data: any, roomKey: string) => void} callback
     */
    public onEmit(eventKey: string, callback: (data: any, roomKey: string) => void): void

    /**
     * Joining a room
     * @param  {string} roomKey The room we want to join
     */
    public join(roomKey: string): void

    /**
     * Leaving a room
     * @param {string} roomKey The room you want to leave
     */
    public leave(roomKey: string): void

    /**
     * Monitor logging feature
     * @param {string} value The value you want to monitor
     */
    public monitor<T extends string>(value: T): T

    /**
     * Closing the socket server
     */
    public disconnect(): this
}

declare type Broadcast = {
    /**
     * Broadcast to room
     * @param  {string} roomKey the roomkey which need to be attached to
     * @returns
     * @example
     *  { emit: <T = any>(eventKey: string, payload: T) => void }
     */
    to: (roomKey: string) => ({
        emit: <T = any>(eventKey: string, payload: T) => void
    })
};
