import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface FormData {
  name: string;
  age: number;
  sex: string;
}

const ELEMENT_DATA: FormData[] = [
  { name: 'Kapil Sharma asdasdasd asdasdasdas', age: 15, sex: 'Male' },
  { name: 'Kapil Sharma', age: 15, sex: 'Male' },
  { name: 'Kapil Kumar', age: 19, sex: 'Male' },
  { name: 'Kapil Verma', age: 11, sex: 'Male' },
  { name: 'Kapil Gautam', age: 18, sex: 'Male' }
];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ['name', 'age', 'sex'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
