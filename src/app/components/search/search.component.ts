import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(
    public storage: StorageService
  ) {}

  public keywords: string = "";
  public list: any[] = [];
  ngOnInit() {
    const list= this.storage.get('searchList');

    if(list){
      this.list=list||[];
    }
  }

  search() {
    if (this.keywords == "" || this.keywords.trim() == "") {
      console.log("请输入");
      return;
    }
    if (this.list.indexOf(this.keywords) == -1) {
      this.list.push(this.keywords);

      this.storage.set('searchList',this.list);
    }

    this.keywords = "";
  }

  delete(index) {
    this.list.splice(index, 1);

    this.storage.set('searchList',this.list);
  }

  changeData(){
    this.storage.setData('aaa');
  }
}
