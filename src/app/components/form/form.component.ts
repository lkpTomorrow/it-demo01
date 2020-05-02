import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  public userInfo:object={
    name:'',
    sex:'0',
    cityList:['北京','上海','广州'],
    city:'上海',
    hobbys:[
      {name:'吃饭',checked:false},
      {name:'睡觉',checked:true},
      {name:'打豆豆',checked:true},
    ],
    mark:'',
  }
  ngOnInit() {
  }

  submitUserInfo(){
    console.log(this.userInfo)
    
  }

}
