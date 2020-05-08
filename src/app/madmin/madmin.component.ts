import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madmin',
  templateUrl: './madmin.component.html',
  styleUrls: ['./madmin.component.css']
})
export class MAdminComponent implements OnInit {

  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

  
