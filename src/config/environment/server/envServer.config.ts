import { IEnvironmentServerConfig } from '@config/environment/server/envServer.interface';
import { EEnvironmentServerConfig } from '@config/environment/server/envServer.enum';
import { Config } from '@config/config';

class EnvironmentConfigServer extends Config {
   public SERVER: IEnvironmentServerConfig;

   constructor() {
      super();

      this.SERVER = <IEnvironmentServerConfig>{
         PORT: this.getEnvVariable(EEnvironmentServerConfig.PORT),
         NODE_ENV: this.getEnvVariable(EEnvironmentServerConfig.NODE_ENV),
         CORS_ORIGIN: this.getEnvVariable(EEnvironmentServerConfig.CORS_ORIGIN),
      };
   }
}

export default new EnvironmentConfigServer();
