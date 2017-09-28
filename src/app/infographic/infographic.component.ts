import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.css']
})
export class Infographic implements OnInit {
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
