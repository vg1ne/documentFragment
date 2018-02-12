import {AfterContentInit, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ITableConfig} from "../../models/table-config.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, AfterContentInit {
  @Input() config: ITableConfig;
  private table: DocumentFragment;

  constructor(private elementRef: ElementRef) {

  }

  ngAfterContentInit() {

  }

  ngOnInit() {
    this.table = this.generateTable();
    this.elementRef.nativeElement.appendChild(this.table)
  }

  private generateTable() {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.className = 'table table-striped table-bordered'
    for(let i = 0; i< this.config.rows;i++){
      const rowElement = document.createElement('tr');
      for(let j = 0; j< this.config.cols;j++){
        const cellElement = document.createElement('td');
        cellElement.innerHTML = `${i}|${j}`
        rowElement.appendChild(cellElement)
      }
      table.appendChild(rowElement)
    }
    fragment.appendChild(table);
    return fragment;
  }
}

