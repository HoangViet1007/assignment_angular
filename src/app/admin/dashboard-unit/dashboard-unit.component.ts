import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-unit',
  templateUrl: './dashboard-unit.component.html',
  styleUrls: ['./dashboard-unit.component.css']
})
export class DashboardUnitComponent implements OnInit {

  constructor() { }
  @Input() demoInput : any ; 
  @Output() demoOutput = new EventEmitter() ; 

  ngOnInit(): void {
     
  }
  teacher = "trần hữu thiện" ;

  hien(){
    this.demoOutput.emit(1) ; 
  
  }
  
}
