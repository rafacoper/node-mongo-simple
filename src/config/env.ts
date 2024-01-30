require("dotenv").config();

type Env = {
  PORT: string;
  USER: string;
  PASSWORD: string;
  JWT_ACCESS_TOKEN: string;
  JWT_REFRESH_TOKEN: string;
  JWT_PRIVATE_KEY: string;
  JWT_CONFIG: any;
};

export const env = { ...process.env } as Env