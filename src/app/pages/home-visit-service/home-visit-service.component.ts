import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-visit-service',
  templateUrl: './home-visit-service.component.html',
  styleUrls: ['./home-visit-service.component.css']
})
export class HomeVisitServiceComponent implements OnInit {
  search:any;
  total:any;
  constructor() { }

  ngOnInit() {}

  searchValue(){}

  pagination(event){}

  deleteUser(){}
}
