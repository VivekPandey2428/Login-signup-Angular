import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animation } from '@angular/animations';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'login-signup';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
