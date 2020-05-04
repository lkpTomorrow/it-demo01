import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  @ViewChild('aside') aside:ElementRef;
  ngOnInit() {
  }

  // 隐藏
  hide(){
    this.aside.nativeElement.style.right='-200px';
  }

   // 显示
   show(){
    this.aside.nativeElement.style.right='0px';
  }
}
