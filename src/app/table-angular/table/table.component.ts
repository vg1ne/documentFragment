import {Component, Input, OnInit} from '@angular/core';
import {ITableConfig} from "../../models/table-config.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() config: ITableConfig;
  constructor() { }

  ngOnInit() {
  }

}
