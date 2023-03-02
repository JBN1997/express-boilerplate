import * as dotenv from 'dotenv';
import { AnyObject, ObjectSchema } from 'yup';

export default abstract class EnvironmentConfig<T extends AnyObject = any> {
   protected abstract schema: ObjectSchema<T>;

   constructor() {
      dotenv.config();
   }

   protected validateEnvObject(object: T): boolean {
      return this.schema.isValidSync(object);
   }
}
