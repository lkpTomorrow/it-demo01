import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"]
})
export class TodolistComponent implements OnInit {
  constructor() {}

  public keywords: string = "";
  public todolist: any[] = [];

  ngOnInit() {}

  search(e) {
    // console.log('keyCode:',e.keyCode);

    if (this.keywords == "" || this.keywords.trim() == "") {
      console.log("请输入");
      return;
    }
    if (e.keyCode == 13) {
      // 当输入的是列表不包含的时候，才添加
      if (!this.listHasKeywords()) {
        this.todolist.push({
          title: this.keywords,
          status: false
        });
      }else{
        console.log('已经有了该项');
      }

      this.keywords = ""; // 置空
    }
  }

  delete(index) {
    this.todolist.splice(index, 1);
  }

  listHasKeywords() {
    for (var i = 0; i < this.todolist.length; i++) {
      if (this.todolist[i].title == this.keywords) {
        return true;
      }
    }
    return false;
  }


  get todoLength(){
    return this.todolist.filter((v,k)=>{
      return !v.status;
    }).length;
  }


  get doneLength(){
    return this.todolist.filter(v=>v.status).length;
  }
}
