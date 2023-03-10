import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Notification = lazy(() => import("./notification1/Notification"));
const viewNotification = lazy(() => import("./notification1/viewNotification"));


const notificationRouter = [
    {
        path: "/notification/v1",
        component: Notification,
        auth: authRoles.admin
    },
    {
        path: "/notification/viewNotification",
        component: viewNotification,
        auth: authRoles.admin
    },

];

export default notificationRouter;
