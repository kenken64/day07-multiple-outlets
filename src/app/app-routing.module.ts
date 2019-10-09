import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu-component'
import { SubMenuComponent } from './components/sub-menu-component'
import { MainContentComponent } from './components/main-content-component'
import { SubContentComponent } from './components/sub-content-component'

const routes: Routes = [
  { path: "", component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sub-menu', component: SubMenuComponent },
  { 
    path: 'main-content', 
    component: MainContentComponent, 
    outlet: 'secondary' 
  },
  { 
    path: 'sub-content', 
    component: SubContentComponent, 
    outlet: 'secondary' 
  },
  { path: "**", redirectTo: "/", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
