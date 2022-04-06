import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.css']
})
export class ParentsListComponent implements OnInit {
  myData = '@munit';
  ageData = 2022;

  constructor() { }

  ngOnInit(): void {
  }

}
