import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu-component';
import { SubMenuComponent } from './components/sub-menu-component';
import { MainContentComponent } from './components/main-content-component';
import { SubContentComponent } from './components/sub-content-component';
import { ThirdContentComponent } from './components/third-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubMenuComponent,
    MainContentComponent,
    SubContentComponent,
    ThirdContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
