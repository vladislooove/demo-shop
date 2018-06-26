// @flow

import { LOCALE_CHANGE } from '../constants';

const locale = (state: string = 'en', action: Object) => {
    switch (action.type) {
        case LOCALE_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

export default locale;