import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from "@angular/core";


// var storage= new StorageService();
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"]
})
export class TodolistComponent implements OnInit {
  constructor(
    public storage:StorageService
  ) {}

  public keywords: string = "";
  public todolist: any[] = [];

  ngOnInit() {
    const todolist= this.storage.get('todolist');
    if(todolist){
      this.todolist= todolist||[];
    }
  }

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

        this.storage.set('todolist',this.todolist);
      }else{
        console.log('已经有了该项');
      }

      this.keywords = ""; // 置空
    }
  }

  // 删除
  delete(index) {
    this.todolist.splice(index, 1);
    this.storage.set('todolist',this.todolist);
  }

  // list中是否包含keywords的值
  listHasKeywords() {
    for (var i = 0; i < this.todolist.length; i++) {
      if (this.todolist[i].title == this.keywords) {
        return true;
      }
    }
    return false;
  }

  // 获取代办和已完成的长度
  get todoLength(){
    return this.todolist.filter((v,k)=>{
      return !v.status;
    }).length;
  }


  get doneLength(){
    return this.todolist.filter(v=>v.status).length;
  }

  // 改变状态：
  changeStatus(){
    console.log('change执行了');
    this.storage.set('todolist',this.todolist);
  }
}
