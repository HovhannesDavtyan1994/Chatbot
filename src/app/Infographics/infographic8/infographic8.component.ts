import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic8',
  templateUrl: './infographic8.component.html',
  styleUrls: ['./infographic8.component.css']
})
export class Infographic8Component implements OnInit {
  @Input() model: any;
  Math: any
  public data = this.model;
  constructor() { 
  }

  ngOnInit() {
    this.Math = Math;
  }

}
