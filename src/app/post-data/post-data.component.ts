import { Component, OnInit } from '@angular/core';
import { HttpGetDataService } from '../Services/http-get-data.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServices: HttpGetDataService ) { }

  ngOnInit(): void {
    const payload = 
    {
      body: "some comment 111",
      postId: 1
    };
    
    this.httpServices.postComments(payload).subscribe(data => {
      console.log("post data: ", payload);
    })
  }
}
