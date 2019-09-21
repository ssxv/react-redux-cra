import React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { StoreInterface } from './store';
import logo from './logo.svg';
import './App.css';
import { NotificationStateInterface } from './reducers/notificationReducer';
import { notificationAction, NotificationActionInterface } from './actions/notificationAction';
import { CakeActionsInterface, getCakesAction } from './actions/cakeActions';

interface Props extends NotificationActionInterface, CakeActionsInterface {
    notification?: NotificationStateInterface;
}

class App extends React.Component<Props, any> {

    componentDidUpdate(prevProps: Props) {
        const { notification } = this.props;
        if (notification && notification !== prevProps.notification) {
            this.notify(notification.success, notification.message);
        }
    }

    notify = (success: boolean, message: string) => {
        if (success) {
            return NotificationManager.info(message);
        } else {
            return NotificationManager.error(message);
        }
    }

    doNotify = () => {
        if (this.props.notificationAction) {
            this.props.notificationAction(true, 'Hi');
        }
        if (this.props.getCakesAction) {
            this.props.getCakesAction();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <button onClick={this.doNotify}>View Notification</button>
                        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                    </header>
                </div>
                <NotificationContainer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: StoreInterface) => {
    return {
        notification: state.notification
    }
};

const mapDispatchToProps = {
    notificationAction, getCakesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
