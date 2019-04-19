import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss']
})
export class AppProfileComponent implements OnInit {

  constructor() { }

  editMode: boolean;

  @Input('user') user: User;
  @Output() onUserUpdate = new EventEmitter<User>();

  save(e: Event){
    this.onUserUpdate.emit(this.user);
    e.preventDefault();
    // alert('Сохранено!');
  }

  ngOnInit() {
    this.editMode = false;
  }

}
