import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-infographic3',
  templateUrl: './infographic3.component.html',
  styleUrls: ['./infographic3.component.css']
})
export class Infographic3Component implements OnInit {

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
