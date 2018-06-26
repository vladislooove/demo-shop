import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import enLocaleData from 'react-intl/locale-data/en';
import ukLocaleData from 'react-intl/locale-data/uk';
import ruLocaleData from 'react-intl/locale-data/ru';

import { getLocalesState } from '../selectors';

import enTranslationMessages from '../translations/en.json';
import ukTranslationMessages from '../translations/uk.json';
import ruTranslationMessages from '../translations/ru.json';

addLocaleData([...enLocaleData, ...ukLocaleData, ...ruLocaleData]);

const messages = {
    'en': enTranslationMessages,
    'uk': ukTranslationMessages,
    'ru': ruTranslationMessages,
};

class Translations extends React.Component {
    render() {
        return this.props.locales.map((locale) => {
            if (locale.isActive) {
                return (
                    <IntlProvider locale={locale.name} key={locale.name} messages={messages[locale.name]}>
                        {React.Children.only(this.props.children)}
                    </IntlProvider>    
                );
            }

            return null;
        })
    }
};

const mapStateToProps = state => {
    return {
        locales: getLocalesState(state),
    };
};

export default connect(mapStateToProps, null)(Translations);