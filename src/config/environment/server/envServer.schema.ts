import * as yup from 'yup';
import { IEnvironmentServerConfig } from '@config/environment/server/envServer.interface';

const environmentServerConfigSchema: yup.ObjectSchema<IEnvironmentServerConfig> =
   yup.object({
      PORT: yup.number().required(),
      NODE_ENV: yup.string().required(),
   });

export default environmentServerConfigSchema;
