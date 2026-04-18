const baseFromEnv = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:3000";

// Normalize to avoid accidental double slashes when composing endpoint URLs.
export const API_BASE = baseFromEnv.replace(/\/$/, "");
