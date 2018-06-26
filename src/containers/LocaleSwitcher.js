import React from 'react';
import { connect } from 'react-redux';

import { localeChange } from '../actions';

import { getLocalesState } from '../selectors';

class LocaleSwitcher extends React.PureComponent {
    handleLocaleChange(locale) {
        this.props.localeChange(locale);
    }

    render() {
        return (
            <ul className="locale-switcher">
                {this.props.locales.map((locale) => {
                    return (
                        <li key={locale.name}
                            className="locale-switcher__item">
                            <a className={locale.isActive ? 'locale-switcher__link locale-switcher__link--active' : 'locale-switcher__link'}
                               onClick={this.handleLocaleChange.bind(this, locale)}>
                                {locale.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        locales: getLocalesState(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        localeChange: (locale) => {
            dispatch(localeChange(locale))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);