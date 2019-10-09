import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sub-content-component',
  templateUrl: './sub-content-component.html',
  styleUrls: ['./sub-content-component.css'],
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ]
})
export class SubContentComponent implements OnInit {
  currentState = 'initial';
  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
