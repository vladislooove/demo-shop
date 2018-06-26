import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { getLocalesState } from '../selectors';

class Translations extends React.Component {
    render() {
        return this.props.locales.map((locale) => {
            if (locale.isActive) {
                return (
                    <IntlProvider locale={locale.name} key={locale.name}>
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