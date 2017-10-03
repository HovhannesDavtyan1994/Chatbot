import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-infographic6',
  templateUrl: './infographic6.component.html',
  styleUrls: ['./infographic6.component.css']
})
export class Infographic6Component implements OnInit {
  @Input() model: any
  public data = this.model;
  public GroceryCosts = {
    EveryDay:{
      Percent : 55,
      Total : 145
    },
    FiveTimes:{
      Percent : 30,
      Total : 239
    },
    ThreeTimes:{
      Percent : 14,
      Total : 314
    },
    Rarely:{
      Percent : 1,
      Total : 389
    },
    Never:{
      Percent : 0.30,
      Total : 404
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
