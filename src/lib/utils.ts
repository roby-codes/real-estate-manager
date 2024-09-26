import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classList: ClassValue[]) => twMerge(clsx(classList));
