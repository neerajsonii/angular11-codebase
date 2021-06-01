import { Environment } from './environment.interface';
import { environment as environment_local } from './environment.local';

// Use the local environment config if none is specified
export const environment: Environment = environment_local;
