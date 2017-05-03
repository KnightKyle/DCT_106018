import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  data: any = {
    'name': 'Will',
    'sid': 'A123456789'
  };
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      'name': 'Will',
      'sid': 'A123456789'
    });
  }

}
