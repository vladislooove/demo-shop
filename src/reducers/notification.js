import type { NotificationStateType } from '../types';

import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from '../constants';

const notification = (state: NotificationStateType = { isShown: false, message: '', type: 'info' }, action: Object) => {
    switch (action.type) {
        case NOTIFICATION_SHOW:
            console.log(action);
            return state;

        case NOTIFICATION_HIDE:
            console.log(action);
            return state;

        default:
            return state;
    }
};



export default notification;