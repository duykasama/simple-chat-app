export type ChatMessageType = {
    id: string;
    sender_id: string;
    recipient_id: string;
    content: string;
    created_at: string;
};

export type CreateMessageType = {
    sender_id: string;
    recipient_id: string;
    content: string;
};
