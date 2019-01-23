import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputerComponent } from './components/computer/computer.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
