import { Component, OnInit } from '@angular/core';
import { HttpGetDataService } from '../Services/http-get-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpServices: HttpGetDataService) { }

  public ngOnInit(): void {
    this.httpServices.getComments().subscribe(data => {
      console.log("data1:", data);
    });

    this.httpServices.getApiUser(10).subscribe(data => {
      console.log("data user:", data.results);
    });
  }

}
