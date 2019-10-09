import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiple-outlets';
  

  constructor(private router: Router){

  }
  
  navigateTo(path: string){
    console.log(path);
    this.router.navigate([path]);
  }

  navigateToSecondOutlet(path: string){
    console.log(path);
    this.router.navigate([{outlets: { primary: ['sub-menu'], secondary: ['sub-content'] } }]);
  }
}
