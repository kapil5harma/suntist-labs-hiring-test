import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import Formdata from '../formdata';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input('tableData') tableData: Formdata[];

  dataSource: MatTableDataSource<Formdata>;

  constructor() {}

  displayedColumns: string[] = ['name', 'age', 'sex'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
