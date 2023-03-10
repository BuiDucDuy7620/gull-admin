import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Attendance = lazy(() => import("./Attendance"));
// const CandidatesOverview = lazy(() => import("./CandidatesOverview"));


const attendanceRouter = [
    {
        path: "/attendance/attendanceLogList",
        component: Attendance,
        auth: authRoles.admin
    }
    // ,
    // {
    //     path: "/interview/CandidatesOverview",
    //     component: CandidatesOverview,
    //     auth: authRoles.admin
    // },


];

export default attendanceRouter;
