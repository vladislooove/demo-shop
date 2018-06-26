import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Breadcrumbs = (props) => {
    const links = props.links;

    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link"
                      to="/">
                    <FormattedMessage id="app.navigation.home" />
                </Link>
            </li>
            {
                links.map((link, index) => {
                    if (index === (links.length - 1)) {
                        return (
                            <li className="breadcrumbs__item"
                                key={index}>
                                <span className="breadcrumbs__link breadcrumbs__link--active">
                                    <FormattedMessage id={link.name} />
                                </span>
                            </li>
                        );
                    }

                    return (
                        <li className="breadcrumbs__item"
                            key={index}>
                            <Link className="breadcrumbs__link"
                                to={link.path}
                                key={index}>
                                    <FormattedMessage id={link.name} />
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

Breadcrumbs.proptypes = {
    links: PropTypes.array.isRequired,
};

export default Breadcrumbs;