import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {
      name: 'Will',
      sid: 'A123456789'
    };;

  constructor() { }

  ngOnInit() {
    this.data = {};
  }

}
