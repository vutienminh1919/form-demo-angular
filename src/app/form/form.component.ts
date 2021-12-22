import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
book:any = {
  name:'',
  year: '',
  author: '',

}
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.book)
  }

}
