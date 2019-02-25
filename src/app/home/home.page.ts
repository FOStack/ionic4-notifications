import { Component } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
  public localNotifications: LocalNotifications,
  ){

  }

  addNotifications(){
    this.localNotifications.schedule(
      {
        id: 1,
        title: 'Hello',
        text: 'This is a test',
        trigger: {at: new Date(new Date().getTime() + 3600)},
      }
    );
  }

}
