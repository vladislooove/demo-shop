import type { NotificationStateType } from '../types';

import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from '../constants';

const notification = (state: NotificationStateType = { isShown: false, message: '', type: 'info' }, action: Object) => {
    switch (action.type) {
        case NOTIFICATION_SHOW:
            return {
                isShown: true,
                message: action.payload.message,
                type: action.payload.type,
            };

        case NOTIFICATION_HIDE:
            return {
                isShown: false,
                message: state.message,
                type: state.type,
            };

        default:
            return state;
    }
};



export default notification;