import { Component, inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'techsys_fe';
  searchTerm: any;

  showLoader: boolean = false;

  router: Router = inject(Router);

  ngOnInit(){
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }

      if(routerEvent instanceof NavigationEnd 
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError
        )
      {
        this.showLoader = false;
      }
    })
  }
}
