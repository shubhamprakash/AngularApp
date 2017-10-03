import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  	textPara: String = "No server";
  	isDisabled: Boolean;

  constructor() { 
  	this.isDisabled = true;
  	setTimeout(this.isDisabled = false, 20000)
  }

  ngOnInit() {
  }

  changeButton() {
  	this.isDisabled = false;
  }
  onClickAdd() {
  	this.textPara = "New Server Added";
  }
}
