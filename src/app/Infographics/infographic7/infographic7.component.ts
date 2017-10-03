import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-infographic7',
  templateUrl: './infographic7.component.html',
  styleUrls: ['./infographic7.component.css']
})
export class Infographic7Component implements OnInit {
  @Input() model: any
  public data = this.model;
  public Employee = {
    Name : "Emma",
    MovingCity : "London",
    Price : {
      Rent : {
        Cost : "700",
        euro : "770"
      },
      Commute : {
        Cost : "135",
        euro : "145"
      },
      Groceries : {
        Cost : "145",
        euro : "160"
      },
      Total : {
        Cost : "1.480",
        euro : "1.625"
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
