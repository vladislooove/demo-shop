// @flow

import type { NotificationType } from '../types';

import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
    NOTIFICATION_ADD,
    NOTIFICATION_REMOVE,
} from '../constants';

const notification = (state: Array<NotificationType> = [], action: Object) => {
    switch (action.type) {
        case NOTIFICATION_ADD:
            return [
                ...state,
                {
                    isShown: false,
                    message: action.payload.message,
                    type: action.payload.type,
                    id: action.payload.id,
                },
            ];

        case NOTIFICATION_REMOVE: 
            const newRemoveState: Array<NotificationType> = [];
            
            state.forEach((notification: NotificationType) => {
                if (notification.id !== action.payload) {
                    newRemoveState.push(notification);
                }
            });

            return newRemoveState;

        case NOTIFICATION_SHOW:
            const newShowState: Array<NotificationType> = [];

            state.forEach((notification: NotificationType) => {
                if (notification.id !== action.payload) {
                    newShowState.push(notification);
                } else {
                    newShowState.push({
                        isShown: true,
                        message: notification.message,
                        type: notification.type,
                        id: notification.id,
                    });
                }
            });

            return newShowState;
        
        case NOTIFICATION_HIDE:
            const newHideState: Array<NotificationType> = [];

            state.forEach((notification: NotificationType) => {
                if (notification.id !== action.payload) {
                    newHideState.push(notification);
                } else {
                    newHideState.push({
                        isShown: false,
                        message: notification.message,
                        type: notification.type,
                        id: notification.id,
                    });
                }
            });

            return newHideState;

        default:
            return state;
    }
};



export default notification;