import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic1',
  templateUrl: './infographic1.component.html',
  styleUrls: ['./infographic1.component.css']
})
export class Infographic1Component implements OnInit {
  @Input() model: any
  Math: any
  public data = this.model;

  constructor() {
    this.Math = Math;  
  }

  ngOnInit() {
   
  }
}
