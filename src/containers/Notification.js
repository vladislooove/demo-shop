import React from 'react';
import { connect } from 'react-redux';

import { getNotificationState } from '../selectors';

class Notification extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.notifications.map((notification, index) => {
                    const { isShown, message, type } = notification;

                    return (
                        <div className={ isShown ? 
                            `notification notification--visible notification--${type}` 
                            : `notification notification--${type}` }
                            key={index}>
                            {message}
                        </div>    
                    );
                })}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        notifications: getNotificationState(state),
    };
};

export default connect(mapStateToProps, null)(Notification);