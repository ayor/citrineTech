const dev = process.env.NODE_ENV !== "production" ? "dev" : null;

export const server = dev ? "http://localhost:3000" : "production domain";



