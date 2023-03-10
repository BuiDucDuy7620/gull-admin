import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Organization = lazy(() => import("./Organization"));
const OrganizationStructure = lazy(() => import("./OrganizationStructure"));


const organizationRouter = [
    {
        path: "/organization/organization",
        component: Organization,
        auth: authRoles.admin
    },
    {
        path: "/organization/OrganizationStructure",
        component: OrganizationStructure,
        auth: authRoles.admin
    }

];

export default organizationRouter;
