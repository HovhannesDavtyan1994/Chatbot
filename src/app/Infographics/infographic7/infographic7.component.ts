import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-infographic7',
  templateUrl: './infographic7.component.html',
  styleUrls: ['./infographic7.component.css']
})

export class Infographic7Component implements OnInit {
  @Input() model: any
  Math: any
  public data = this.model;
  
  constructor() { }

  ngOnInit() {
    this.Math = Math;
  }

}
