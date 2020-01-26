export interface IUser {
  profile: string;
  username: string;
  id: string;
  messages: IMessage[];
}

export interface IMessage {
  isMe: boolean;
  message: string;
  createdAt: string;
  isRead: boolean;
  messageType: 'string' | 'image';
}
