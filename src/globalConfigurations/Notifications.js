
import { store } from 'react-notifications-component';
// GREEN
export const success = (props) => {
    store.addNotification({
        title: 'USPESNO',
        message: props,
        type: 'success',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 2000,
            showIcon: true
        }
    })
}
// RED
export const fail = (props) => {
    store.addNotification({
        title: 'NEUSPESNO',
        message: props,
        type: 'danger',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 4000,
            showIcon: true
        }
    })
}
// RED
export const deleted = (props) => {
    store.addNotification({
        title: 'OBRISANO',
        message: props,
        type: 'danger',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 4000,
            showIcon: true
        }
    })
}
// YELLOW
export const warning = (props) => {
    store.addNotification({
        title: 'OBRISANO',
        message: props,
        type: 'warning',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 4000,
            showIcon: true
        }
    })
}
//  BLUE
export const tips = (props) => {
    store.addNotification({
        title: 'TIPS',
        message: props,
        type: 'default',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 10000,
            showIcon: true
        }
    })
}
// LIGHT BLUE
export const info = (props) => {
    store.addNotification({
        title: 'TIPS',
        message: props,
        type: 'info',
        container: 'bottom-center',
        insert: 'bottom-center',
        animationIn: ["animated", "fadeInUp"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
            duration: 4000,
            showIcon: true
        }
    })
}

