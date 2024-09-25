import { ROLES } from "@/constants/roles";

export type UserRoleType = (typeof ROLES)[keyof typeof ROLES];
