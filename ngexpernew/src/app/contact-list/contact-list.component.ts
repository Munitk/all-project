import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  ChildData: any;
  constructor() { }
  ngOnInit(): void {
  }
  receivedChildData(myval: String) {
    this.ChildData = myval;
  }
}
// array=['one','two','three'];
// details=[{ name:'munt',
// age:22
// }]
// constructor() { }

// ngOnInit(): void {
// }
// recivedChildData(myval: string) {
//   this.recivedData = myval;

// }
