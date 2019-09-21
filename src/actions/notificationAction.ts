export const NOTIFICATION_ACTION = 'NOTIFICATION_ACTION';

export interface NotificationActionInterface {
    notificationAction?(success: boolean, message: string): Function;
}

export const notification = (success: boolean, message: string) => {
    return {
        type: NOTIFICATION_ACTION,
        data: { success, message }
    };
}

export const notificationAction = (success: boolean, message: string): Function => {
    return (dispatch: any) => {
        return dispatch(notification(success, message));
    }
}
