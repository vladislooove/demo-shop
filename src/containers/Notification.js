import React from 'react';
import { connect } from 'react-redux';

import { getNotificationState } from '../selectors';

import { hideNotification } from '../actions';

class Notification extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.notifications.map((notification, index) => {
                    const { isShown, message, type, id } = notification;

                    return (
                        <div className={ isShown ? 
                            `notification notification--visible notification--${type}` 
                            : `notification notification--${type}` }
                            key={index}>
                            {message}
                            <div className="notification__close"
                                 onClick={ () => { this.props.hideNotification(id) } }>
                                ✕
                            </div> 
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

const mapDispatchToProps = dispatch => {
    return {
        hideNotification: (id) => {
            dispatch(hideNotification(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);