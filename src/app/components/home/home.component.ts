import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  public msg: string = "我是msg";
  public msg2: string = "我是msg";
  public list1: any[];
  public list2: string[];
  public list3: Array<any>;
  public list4: Array<number>;

  public ojb: object = [];

  ngOnInit() {
    this.list3 = ["11", 22, { name: "zs" }];
  }

  getBtnDom(e) {
    const dom = e.target;

    dom.style.color = "red";
  }
}
