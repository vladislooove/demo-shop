import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
    const links = props.links;

    return (
        <ul className="bradcrumbs">
            <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link"
                      to="/">
                    Home
                </Link>
                {
                    links.map((link, index) => {
                        if (index === (links.length - 1)) {
                            return (
                                <li className="breadcrumbs__item"
                                    key={index}>
                                    <span className="breadcrumbs__link breadcrumbs__link--active">
                                        {link.name}
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
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </li>
        </ul>
    );
};

Breadcrumbs.proptypes = {
    links: PropTypes.array.isRequired,
};

export default Breadcrumbs;