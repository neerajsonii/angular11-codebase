import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Environment } from '../../../../environments/environment.interface';
import { AppConfig, APP_CONFIG } from '../../../configs/configs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public readonly environment: string = (environment as Environment).environment;
  constructor(@Inject(APP_CONFIG) public appConfig: AppConfig) { 
    
  }

  ngOnInit(): void {
  }

}
