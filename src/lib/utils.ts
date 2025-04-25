import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


//cn -short for className
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
