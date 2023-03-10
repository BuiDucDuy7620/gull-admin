import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Payroll = lazy(() => import("./Payroll"));
// const CandidatesOverview = lazy(() => import("./CandidatesOverview"));


const PayrollRouter = [
    {
        path: "/payroll/payrollList",
        component: Payroll,
        auth: authRoles.admin
    }
    // ,
    // {
    //     path: "/Payroll/CandidatesOverview",
    //     component: CandidatesOverview,
    //     auth: authRoles.admin
    // },


];

export default PayrollRouter;
