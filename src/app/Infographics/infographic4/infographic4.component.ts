import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-infographic4',
  templateUrl: './infographic4.component.html',
  styleUrls: ['./infographic4.component.css']
})
export class Infographic4Component implements OnInit {
  @Input() model: any
  public data = this.model;
  public Employee = {
    Name : "Emma",
    MovingCity : "London"
  }
  constructor() { }

  ngOnInit() {
  }

}
