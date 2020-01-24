export interface IUser {
  profile: string;
  username: string;
  messages: IMessage[];
}

interface IMessage {
  isMe: boolean;
  message: string;
  createdAt: string;
  isRead: boolean;
  messageType: 'string' | 'image';
}
