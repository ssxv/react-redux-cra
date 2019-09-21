import { NOTIFICATION_ACTION } from '../actions/notificationAction';

export interface NotificationStateInterface {
    success: boolean;
    message: string;
}

export const NotificationReducer = (state = {} as NotificationStateInterface, action: any) => {
    switch (action.type) {
        case NOTIFICATION_ACTION:
            return Object.assign({}, state, {
                success: action.data.success,
                message: action.data.message
            });
        default:
            return state
    }
}
