import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public title: string;
  
  constructor(){ 
    this.title= "About me";
  }

  ngOnInit(){
    //$("nav").css("background", "orange");
  }

}
