import { ObjectSchema } from 'yup';
import { IEnvironmentServerConfig } from '@config/environment/server/envServer.interface';
import { EEnvironmentServerConfig } from '@config/environment/server/envServer.enum';
import EnvironmentConfig from '@config/environment/envConfig';
import environmentServerConfigSchema from '@config/environment/server/envServer.schema';

class EnvironmentConfigServer extends EnvironmentConfig<IEnvironmentServerConfig> {
   protected schema: ObjectSchema<IEnvironmentServerConfig>;
   public SERVER: IEnvironmentServerConfig;

   constructor() {
      super();

      this.SERVER = <IEnvironmentServerConfig>{
         PORT: parseInt(this.getEnvVariable(EEnvironmentServerConfig.PORT)),
         NODE_ENV: this.getEnvVariable(EEnvironmentServerConfig.NODE_ENV),
      };
      this.schema = environmentServerConfigSchema;
      this.validateEnvObject(this.SERVER);
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
