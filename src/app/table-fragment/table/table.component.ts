import {Component, Input, OnInit} from '@angular/core';
import {ITableConfig} from "../../models/table-config.model";
import {ICell} from "../../models/cell.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() config: ITableConfig;
  private rows: ICell[];


  constructor() {
    this.rows = this.generateTable();
  }

  ngOnInit() {
  }

  private generateTable() {
    const rows = [];
    for(let i = 0; i< this.config.rows;i++){
      const row = [];
      for(let j = 0; j< this.config.cols;j++){
        row.push({rowIndex: i, colIndex: j})
      }
      rows.push(row);
    }
    return rows;
  }
}

