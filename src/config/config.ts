import * as dotenv from 'dotenv';

export class Config {
   constructor() {
      dotenv.config();
   }

   public getEnvVariable(name: string, fallback: string = ''): string {
      const envVariable = process.env[name];
      const fallbackProvided = fallback.length;

      if (!envVariable && !fallbackProvided)
         throw new Error(`Environment variable ${name} has not been set.`);

      return envVariable || fallback;
   }
}
