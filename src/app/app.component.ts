import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
        ]),
      transition(":leave", [
        animate(100, style({ opacity: 0 }))
        ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-vertical-stepper';
  sectionvisible: string = 'section1'

  constructor() { }

  ngOnInit() {
  }

  openCloseTest(el) {
    this.sectionvisible = el
  }

}
