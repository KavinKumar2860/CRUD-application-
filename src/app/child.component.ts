import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


@Input() Eid:number;
@Input() Empname:string;
@Input() EmpField:string;
@Output() myOutput:EventEmitter<string>=new EventEmitter();
outputMessage:string="Output message child"
constructor(){ }
ngOnInit(): void{
}
sent(){
  this.myOutput.emit(this.outputMessage);
}

}