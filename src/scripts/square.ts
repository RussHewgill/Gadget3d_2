export const prerender = false

import { Client, Environment, ApiError } from "square";
import vercel from '@astrojs/vercel/serverless';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// const client = new Client({
//   accessToken: import.meta.env.SQUARE_ACCESS_TOKEN,
//   // environment: Environment.Sandbox,
//   environment: Environment.Production,
// });

const client = new Client({
  accessToken: import.meta.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});



