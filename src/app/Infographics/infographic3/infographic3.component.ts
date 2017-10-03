import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-infographic3',
  templateUrl: './infographic3.component.html',
  styleUrls: ['./infographic3.component.css']
})
export class Infographic3Component implements OnInit {
    @Input() model: any
    public data = this.model;
public Area = {
    name : "Mile End",
    whyItIsCool : "cheap rents, colourful lifestyle and great services.",
    stayedEmployeesCount : "45%",
    TimeFor:{
        bike : "15",
        tube : "20",
        walk : "25",
    },
    whatColleguesSay : {
        Text:"Mlle End id great if you enjoy cafe culture like me and has some really great bars. There's a few really nice residential areas which are quite, but because of the students it can sometimes get noisy. That's the only thing i don't like, though.",
        Author : "Peter",
        RelocatedTime : "relocated to Stark London in Feb 2017"
    }
}

  constructor() { }

  ngOnInit() {
    var canvas1 = <HTMLCanvasElement> document.getElementById("chart1");
    var ctx1 = canvas1.getContext("2d");
    var canvas2 = <HTMLCanvasElement> document.getElementById("chart2");
    var ctx2 = canvas2.getContext("2d");
    var Chart1 = new Chart(ctx1, {
        type: 'pie',
        data: {
          datasets: [{
              data: [
                  17,
                  83
              ],
              backgroundColor: [
                  "rgba(22, 134, 255, 1)",
                  "rgba(193, 39, 45, 1)"
              ],
              label: 'Dataset 1'
          }],
          labels: [
              "Room",
              "1 bed flat"
          ]
      },
      options: {
          responsive: true
      }
    });
    var Chart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        datasets: [{
            data: [
                10,
                72,
                18
            ],
            backgroundColor: [
                "rgba(247, 147, 30, 1)",
                "rgba(22, 134, 255, 1)",
                "rgba(193, 39, 45, 1)"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Walk",
            "Tube",
            "Bike"
        ]
      },
      options: {
          responsive: true
      }
    });
  }

}
