import { Component, OnInit } from '@angular/core';
import {TableConfigService} from "../../table-config.service";
import {ITableConfig} from "../../models/table-config.model";

@Component({
  selector: 'app-table-fragment-container',
  templateUrl: './table-fragment-container.component.html',
  styleUrls: ['./table-fragment-container.component.css']
})
export class TableFragmentContainerComponent implements OnInit {
  private tableConfig: ITableConfig;

  constructor(private tableConfigService: TableConfigService) {
    this.tableConfig = this.tableConfigService.getConfig();
  }

  ngOnInit() {
  }

}
