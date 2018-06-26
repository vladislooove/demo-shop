import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { getLocaleState } from '../selectors';

class Translations extends React.Component {
    render() {
        return (
            <IntlProvider locale="en">
                {React.Children.only(this.props.children)}
            </IntlProvider>
        );
    }
};

const mapStateToProps = state => {
    return {
        locale: getLocaleState(state),
    };
};

export default connect(mapStateToProps, null)(Translations);