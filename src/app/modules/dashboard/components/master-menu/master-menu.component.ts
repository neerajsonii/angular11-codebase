import { Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { ComponentLoaderDirective } from '../../../../shared/directives/structural/component-loader/component-loader.directive';
import { CountriesComponent } from '../countries/countries.component';
import { LocationsComponent } from '../locations/locations.component';
import { StatusComponent } from '../status/status.component';

interface MenuItem { 
  itemName: string;
  displayName: string;
  component: any;
}

interface MenuTabs { 
  itemName: string;
  displayName: string;
  tabIndex: number;
  viewContainerRef: ViewContainerRef;
}

@Component({
  selector: 'app-master-menu',
  templateUrl: './master-menu.component.html',
  styleUrls: ['./master-menu.component.scss']
})
export class MasterMenuComponent implements OnInit {

  masterMenuItems: MenuItem[] = [
    {
      itemName: 'countries', displayName: 'Countries', component: CountriesComponent
      
    },
    {
      itemName: 'locations', displayName: 'Locations', component: LocationsComponent

    },
    {
      itemName: 'status', displayName: 'Status', component: StatusComponent

    }
  ];

  activeItem: string;

  tabs: MenuTabs[] = [];

  @ViewChildren(ComponentLoaderDirective) componentLoader: QueryList<ComponentLoaderDirective>;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onCloseClick(tab: any): void { 
    tab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  menuItemClicked(item: MenuItem): void { 
    this.activeItem = item.itemName;

    if (!this.tabs.find(tab => tab.itemName === item.itemName)) { 
      this.tabs.push({
        tabIndex: this.tabs.length,
        itemName: item.itemName,
        displayName: item.displayName,
        viewContainerRef: null
      });
    }

    setTimeout(() => {
      const componentLoadersArray = this.componentLoader.toArray();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const viewContainerRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);

      this.tabs[this.tabs.length - 1].viewContainerRef = viewContainerRef;

      if (item.itemName === 'status') { 
        const componentInstance = componentRef.instance as StatusComponent;
        componentInstance.message = 'Hello Status';
      }
    }, 100);
  }

}
