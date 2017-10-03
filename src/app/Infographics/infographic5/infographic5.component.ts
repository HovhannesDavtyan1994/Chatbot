import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic5',
  templateUrl: './infographic5.component.html',
  styleUrls: ['./infographic5.component.css']
})
export class Infographic5Component implements OnInit {
  @Input() model: any
  public data = this.model;
 
  constructor() { }

  ngOnInit() {
  }

}
