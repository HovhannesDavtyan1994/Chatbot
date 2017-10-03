import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic5',
  templateUrl: './infographic5.component.html',
  styleUrls: ['./infographic5.component.css']
})
export class Infographic5Component implements OnInit {
  @Input() model: any
  public data = this.model;
  public Employee = {
    AreaName : "Mile End",
    TransportToOffice : {
      Bike:{
        ColleaguesPercent : "72",
        Price:"135",
        Time : "20"
      },
      Cycle:{
        ColleaguesPercent : "18",
        Price:"60*",
        Time : "15"
      },
      Walk:{
        ColleaguesPercent : "10",
        Price:"0",
        Time : "50"
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
