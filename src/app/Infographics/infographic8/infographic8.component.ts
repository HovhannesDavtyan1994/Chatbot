import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infographic8',
  templateUrl: './infographic8.component.html',
  styleUrls: ['./infographic8.component.css']
})
export class Infographic8Component implements OnInit {
  @Input() model: any
  public data = this.model;
public Comparision = {
  EmployeeName : "Jenny",
  Total : {
    ForEmployee : {
      EUR:100,
      GBP:200
    },
    Average:{
      EUR:100,
      GBP:200
    }
  },
  Rent : {
    ForEmployee : {
      EUR:200,
      GBP:300
    },
    Average:{
      EUR:200,
      GBP:300
    }
  },
  Commute : {
    ForEmployee : {
      EUR:300,
      GBP:400
    },
    Average:{
      EUR:300,
      GBP:400
    }
  },
  Groceries : {
    ForEmployee : {
      EUR:400,
      GBP:500
    },
    Average:{
      EUR:400,
      GBP:500
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
