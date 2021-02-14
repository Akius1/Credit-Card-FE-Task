import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd-Task';
  constructor(private router: Router) {

  }

    directToCreditCard() {
      this.router.navigate(['credit-card'])
    }
}
