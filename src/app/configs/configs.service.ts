import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export interface AppConfig { 
    appName: string;
    disableNativeConsole: boolean;
}

const DEFAULT_CONFIG: AppConfig = {
    disableNativeConsole: false,
    appName: environment.appName
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
    providedIn: 'root',
    factory: () => (DEFAULT_CONFIG)
});
