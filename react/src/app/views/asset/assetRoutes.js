import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Asset = lazy(() => import("./Asset"));
// const CandidatesOverview = lazy(() => import("./CandidatesOverview"));


const assetRouter = [
    {
        path: "/asset/asset",
        component: Asset,
        auth: authRoles.admin
    }
    // ,
    // {
    //     path: "/asset/CandidatesOverview",
    //     component: CandidatesOverview,
    //     auth: authRoles.admin
    // },


];

export default assetRouter;
