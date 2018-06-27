import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyagregar',
  templateUrl: './bodyagregar.component.html',
  styleUrls: ['./bodyagregar.component.css']
})
export class BodyagregarComponent implements OnInit {
    mostrardoc:boolean;
    constructor() { 
    this.mostrardoc=false;
  }
  mostrar(){
      this.mostrardoc=!this.mostrardoc;
  }
  ngOnInit() {
  }

}