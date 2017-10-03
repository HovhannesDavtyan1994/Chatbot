import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-infographic2',
  templateUrl: './infographic2.component.html',
  styleUrls: ['./infographic2.component.css']
})
export class Infographic2Component implements OnInit {
  @Input() model: any
  public data = this.model;
  
  constructor() { }

  ngOnInit() {
  }

}
