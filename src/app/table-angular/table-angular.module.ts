import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableAngularContainerComponent } from './table-angular-container/table-angular-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    TableAngularContainerComponent,
  ],
  exports: [
    TableAngularContainerComponent,
  ]
})
export class TableAngularModule { }
