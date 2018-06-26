// @flow

import type { LocaleType } from '../types';

import { LOCALE_CHANGE } from '../constants';

const locales = (state: Array<LocaleType> = [
    {
        isActive: true,
        name: 'en',
    }, {
        isActive: false,
        name: 'ru',
    }, {
        isActive: false,
        name: 'uk',
    },
], action: Object) => {
    switch (action.type) {
        case LOCALE_CHANGE:
            const newLocalesState: Array<LocaleType> = [];

            state.forEach((locale: LocaleType) => {
                if(action.payload.name === locale.name) {
                    newLocalesState.push({
                        isActive: true,
                        name: locale.name
                    });
                } else {
                    newLocalesState.push({
                        isActive: false,
                        name: locale.name
                    });
                }
            });

            return newLocalesState;

        default:
            return state;
    }
};

export default locales;