import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic1',
  templateUrl: './infographic1.component.html',
  styleUrls: ['./infographic1.component.css']
})
export class Infographic1Component implements OnInit {
  @Input() model: any

  public bankName = this.model;
  public movingCity = {
    name : "London",
    cityIconUrl:"/assets/images/New infographics-37.png", 
    currency:"£",
    price:844,
    priceInEur: 960,
    period: "a month"
  } 
  public originCity = {
    name: "Berlin",
    cityIconUrl:"/assets/images/New infographics-36.png",
    currency:"$",
    price:844,
    priceInEur: 960,
    period: "a month"
  } 
  
  public priceDifference = {
    accommodation: {
      asText: "lower",
      percentage: 45,
      isLower: true
    },
    transport: {
      asText: "lower",
      percentage: 45,
      isLower: true
    },
    food: {
      asText: "lower",
      percentage: 45,
      isLower: true
    },
    entertainment: {
      asText: "lower",
      percentage: 45,
      isLower: true
    }
  }

  constructor() { }

  ngOnInit() {
   
  }
}
