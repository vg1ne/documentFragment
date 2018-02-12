import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableFragmentContainerComponent } from './table-fragment-container/table-fragment-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TableFragmentContainerComponent],
  exports: [TableFragmentContainerComponent]
})
export class TableFragmentModule { }
