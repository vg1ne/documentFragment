import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TableAngularContainerComponent} from "./table-angular/table-angular-container/table-angular-container.component";
import {TableFragmentContainerComponent} from "./table-fragment/table-fragment-container/table-fragment-container.component";

const appRoutes: Routes = [
  {path: 'angular', component: TableAngularContainerComponent},
  {path: 'fragment', component: TableFragmentContainerComponent},
  {path: '*', redirectTo: 'angular'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true} // <-- debugging purposes only
  )],
})
export class AppModule {
}
