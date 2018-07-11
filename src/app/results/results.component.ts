import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface FormData {
  name: string;
  age: number;
  sex: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input('tableData') tableData: FormData[];
  dataSource: MatTableDataSource<FormData>;

  constructor() {}

  displayedColumns: string[] = ['name', 'age', 'sex'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log('this.tableData: ', this.tableData);
    console.log('this.dataSource: ', this.dataSource);
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
