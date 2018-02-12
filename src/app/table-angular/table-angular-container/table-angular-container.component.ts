import {Component, OnInit} from '@angular/core';
import {TableConfigService} from "../../table-config.service";
import {ITableConfig} from "../../models/table-config.model";

@Component({
  selector: 'app-table-angular-container',
  templateUrl: './table-angular-container.component.html',
  styleUrls: ['./table-angular-container.component.css']
})
export class TableAngularContainerComponent implements OnInit {
  private tableConfig: ITableConfig;

  constructor(private tableConfigService: TableConfigService) {
    this.tableConfig = tableConfigService.getConfig();
  }

  ngOnInit() {
  }

}
