import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  public keywords:string='';
  public list:any[]=[];
  ngOnInit() {
  }


  search(){
    if(this.keywords==''||this.keywords.trim()==''){
      console.log('请输入');
      return;
    }
    if(this.list.indexOf(this.keywords)==-1){
          this.list.push(this.keywords);
    }

    this.keywords='';
  }

  delete(index){
    this.list.splice(index,1);
  }
}
