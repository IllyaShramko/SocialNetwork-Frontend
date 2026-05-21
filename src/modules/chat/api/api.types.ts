import { User } from "@shared/api/types";

type Chat = {
	id: number;
	name: string | null;
	isGroup: boolean;
	avatar: string;
	adminId: number | null;
};

type ChatUser = {
	id: number;
	userId: number;
	chatId: number;
	user: User;
};

type MessageImage = {
	id: number;
	image: string;
	messageId: number;
};

type MessageReader = {
	id: number;
	userId: number;
	messageId: number;
};

export type Message = {
	id: number;
	text: string | null;
	createdAt: Date;
	senderId: number;
	chatId: number;
	sender: User;
	messageImages: MessageImage[];
	messageReaders: MessageReader[];
};

export type DirectPreviewChat = Chat & {
	users?: ChatUser[];
	unreadCount: number;
	messages: Message[];
};

export type GroupPreviewChat = Chat & {
	unreadCount: number;
	messages: Message[];
};
