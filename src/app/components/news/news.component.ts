import { Component, OnInit,AfterViewInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('box1') myBox:ElementRef;
  @ViewChild('header') header:ElementRef;

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log(this.myBox);
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color='orange';

    this.header.run();
  }

}
