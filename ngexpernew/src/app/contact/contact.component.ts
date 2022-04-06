import { Component, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();
// @Input() labes:any;
// @Input() profile:any;
  constructor() { }

  ngOnInit(): void {
    this.sendMessage.emit({courseName : 'MEAN' ,
    startedDate : '12/12/2021'});
  
    // alert(this.labes);
    // alert(this.profile);
  }

}
