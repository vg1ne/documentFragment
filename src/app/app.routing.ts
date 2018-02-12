import {Routes} from "@angular/router";
import {TableAngularContainerComponent} from "./table-angular/table-angular-container/table-angular-container.component";
import {TableFragmentContainerComponent} from "./table-fragment/table-fragment-container/table-fragment-container.component";

export const appRoutes: Routes = [
  {path: 'angular', component: TableAngularContainerComponent},
  {path: 'fragment', component: TableFragmentContainerComponent},
  {path: '*', redirectTo: 'angular'}
  ];

