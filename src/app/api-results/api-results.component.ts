import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.scss'],
  providers: [HttpService]
})
export class ApiResultsComponent implements OnInit {
  heading: string;
  description: string;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getAboutData().subscribe(
      response => {
        // tslint:disable-next-line:no-non-null-assertion
        this.heading = response!.results[0]!.category;
        // tslint:disable-next-line:no-non-null-assertion
        this.description = response!.results[0]!.description;
      },
      error => {
        console.log('error: ', error);
      }
    );
  }
}
