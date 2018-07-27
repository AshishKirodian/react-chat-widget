declare module 'react-chat-widget' {
    import * as React from 'react';
    interface Props {
        title: string;
        subtitle: string;
        senderPlaceHolder: string;
        badge: number;
        handleNewUserMessage: (message: string) => void;
    }
    export class Widget extends React.Component<Props, {}>{ }
    export function addResponseMessage(response: string): string
}
