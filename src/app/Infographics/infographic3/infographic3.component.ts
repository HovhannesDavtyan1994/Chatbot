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
    public text:string;
    public author:string;
    public relocatedTime:string;
    constructor() { }

    ngOnInit() {
        this.text = this.model.what_your_colleagues_say.split('"')[1];
        this.author = this.model.what_your_colleagues_say.split('"')[2].split(',')[0];
        this.relocatedTime = this.model.what_your_colleagues_say.split('"')[2].split(',')[1];
        var canvas1 = <HTMLCanvasElement> document.getElementById("chart1");
        var ctx1 = canvas1.getContext("2d");
        var canvas2 = <HTMLCanvasElement> document.getElementById("chart2");
        var ctx2 = canvas2.getContext("2d");
        var Chart1 = new Chart(ctx1, {
            type: 'pie',
            data: {
            datasets: [{
                data: [
                    parseInt(this.model.in_Room.replace('%', '')),
                    parseInt(this.model.flat.replace('%', ''))
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
                    parseInt(this.model.who_walk.replace('%', '')),
                    parseInt(this.model.who_tube.replace('%', '')),
                    parseInt(this.model.who_bike.replace('%', ''))
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
