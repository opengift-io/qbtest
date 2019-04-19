import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/User';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})


export class AppMainComponent implements OnInit {

  constructor() { }
  @Input('user') user: User;

  ngOnInit() {
  }

}
