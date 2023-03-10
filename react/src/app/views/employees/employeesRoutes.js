import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Employees = lazy(() => import("./Employees"));
// const CandidatesOverview = lazy(() => import("./CandidatesOverview"));


const employeesRouter = [
    {
        path: "/employees/employees",
        component: Employees,
        auth: authRoles.admin
    }
    // ,
    // {
    //     path: "/interview/CandidatesOverview",
    //     component: CandidatesOverview,
    //     auth: authRoles.admin
    // },


];

export default employeesRouter;
