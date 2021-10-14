import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) { 

  }

  title = 'Docker Frontend';
  data = this.http.get('http://localhost:4242');
  message: any = {};

  ngOnInit() {
    this.data.subscribe((val: any) => {
      this.logIt(val)
      this.message.greeting = val.greeting;
      this.message.name = val.name;
    })
  }

  logIt(data: any): any {
    console.log(data)
  }

}

