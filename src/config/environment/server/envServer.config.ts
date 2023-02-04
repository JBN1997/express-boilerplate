import * as dotenv from 'dotenv';
import { IEnvironmentServerConfig } from '@config/environment/server/envServer.interface';
import { EEnvironmentServerConfig } from '@config/environment/server/envServer.enum';

class EnvironmentConfigServer {
   public SERVER: IEnvironmentServerConfig;

   constructor() {
      dotenv.config();

      this.SERVER = <IEnvironmentServerConfig>{
         PORT: this.getEnvVariable(EEnvironmentServerConfig.PORT),
         NODE_ENV: this.getEnvVariable(EEnvironmentServerConfig.NODE_ENV),
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

export default new EnvironmentConfigServer();
