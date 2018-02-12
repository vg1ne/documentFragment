import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableConfigService} from "./table-config.service";
import {RouterModule} from "@angular/router";
import {TableAngularModule} from "./table-angular/table-angular.module";
import {appRoutes} from "./app.routing";
import {TableFragmentModule} from "./table-fragment/table-fragment.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TableAngularModule,
    TableFragmentModule
  ],
  providers: [TableConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
