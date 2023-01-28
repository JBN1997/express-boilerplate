import * as dotenv from 'dotenv';

class EnvironmentConfig {
   public SERVER;

   constructor() {
      dotenv.config();

      this.SERVER = {
         PORT: this.getEnvVariable('PORT'),
         ENV: this.getEnvVariable('NODE_ENV'),
      };
   }

   public getEnvVariable(name: string, fallback: string = ''): string {
      const envVariable = process.env[name];
      const fallbackProvided = fallback.length;

      if (!envVariable && !fallbackProvided)
         throw new Error(`Environment variable ${name} has not been set.`);

      return envVariable || fallback;
   }
}

export default new EnvironmentConfig();
