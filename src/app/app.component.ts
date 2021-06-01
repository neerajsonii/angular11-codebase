import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './configs/configs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {
    this.title = appConfig.appName;
    if (this.appConfig.disableNativeConsole) {
      console.log = function () { }
      console.table = function () { }
    }
  }
}
