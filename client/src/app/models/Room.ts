import { Message } from './Message';

export interface Room {
    id?: number;
    roomName: string;
    messages?: Message[];
}
