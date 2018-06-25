import React from 'react';
import { connect } from 'react-redux';

import {
    getNotificationShownState,
    getNotificationMessageState,
    getNotificationTypeState,
} from '../selectors';

class Notification extends React.PureComponent {
    render() {
        const { isShown, message, type } = this.props;

        return (
            <div className={ isShown ? `notification notification--visible notification--${type}` : `notification notification--${type}` }>
                <div className="notification__container">
                    {message}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isShown: getNotificationShownState(state),
        message: getNotificationMessageState(state),
        type: getNotificationTypeState(state),
    };
};

export default connect(mapStateToProps, null)(Notification);