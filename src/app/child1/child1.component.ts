import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onVoted = new EventEmitter<number>();

  changeTitle(){
    this.onVoted.emit(1);
  }


}
