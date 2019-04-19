import {Component, OnInit} from '@angular/core';
import { Tab } from './interfaces/Tab';
import { User } from './interfaces/User';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentTab: Tab;
  tabs: Tab[];
  user: User;
  initTab: string;

  public constructor(private route:ActivatedRoute, private router:Router) {
      // console.log(route.snapshot.data);

      router.events.subscribe((val) =>  {

          if(val instanceof NavigationEnd){

              this.currentTab = 'url' in val && this.tabs.find(e => e.code === val.url.substr(1)) || this.tabs[0];

              console.log(this.currentTab);

          }

      });

  }


  getUser(): User {

      let user = localStorage.getItem('user');

      if(user){
          return  JSON.parse(user);
      }

      return {
          firstName : 'Петр',
          lastName : 'Бесстужев',
          secondName : 'Сергеевич',
          mail : 'besstuzhev@mail.ru',
          phone : '+7 (917) 123-45-67',
          subMail : 'besstuzhev@yandex.ru'
      };

  }

  updateUser(user: User) {

      console.log(user);

      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));

  }

  ngOnInit(): void {

    this.user = this.getUser();

    this.tabs = [
     {
        picture : 'http://www.55n-37e.com/Resources/calculatoricon214-95.png',
        title : 'Обзор',
        code : 'review',
        class : 'item27',
      },
      {
        picture : 'http://www.55n-37e.com/Resources/calculatoricon214-96.png',
        title : 'Услуги',
        code : 'service',
        class : 'item27',
      },
      {
        picture : 'http://www.55n-37e.com/Resources/calculatoricon214-97.png',
        title : 'Портфель',
        code : 'bag',
        class : 'item30',
      },
      {
        picture : 'http://www.55n-37e.com/Resources/calculatoricon214-99.png',
        title : 'Функции',
        code : 'functions',
        class : 'item31',
      },
      {
        picture : 'http://www.55n-37e.com/Resources/calculatoricon214-98.png',
        title : 'Аккаунт',
        code : 'account',
        class : 'item32',
      }
    ];

    if(this.initTab){
        this.currentTab = this.tabs.find(e => e.code === this.initTab);
    }else{
        this.currentTab = this.tabs[0];
    }


  }

}
