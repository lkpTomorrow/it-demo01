import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  public showBoxFlag:boolean= true;

  ngOnInit(){
    let box1:any= document.getElementById('box1');
    console.log(box1);
    box1.style.color='red';

    // let box2:any= document.getElementById('box2');
    // console.log(box2);
    // box2.style.color='red';
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    let box2:any= document.getElementById('box2');
    console.log(box2);
    box2.style.color='blue';
  }
}
