// const dev = process.env.NODE_ENV !== "production" ? "dev" : null;

export const server = process.env.NODE_ENV === "dev" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_VERCEL_URL;



