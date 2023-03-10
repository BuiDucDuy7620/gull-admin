import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Interview = lazy(() => import("./Interview"));
const CandidatesOverview = lazy(() => import("./CandidatesOverview"));


const interviewRouter = [
    {
        path: "/interview/roles",
        component: Interview,
        auth: authRoles.admin
    },
    {
        path: "/interview/CandidatesOverview",
        component: CandidatesOverview,
        auth: authRoles.admin
    },


];

export default interviewRouter;
