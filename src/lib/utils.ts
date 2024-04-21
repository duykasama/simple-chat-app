import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: string) {
  return new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })
}
