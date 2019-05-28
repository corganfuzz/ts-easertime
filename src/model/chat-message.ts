import { User, Message } from "./";

export class ChatMessage extends Message {
  constructor(from: User, content: string) {
    super(from, content);
  }
}
