import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OneSubjectsPage } from '../pages/one-subjects/one-subjects';
import { ManySubjectsPage } from '../pages/many-subjects/many-subjects';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage : any  = HomePage;

  page: Array<{title: string , component: any , icon: string}>;

  pageActive: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
    
    this.page=[
    {title: 'Trang chủ' , component: HomePage , icon: 'home'},
    {title: 'Tính từng môn' , component: OneSubjectsPage , icon: 'calculator' },
    {title: 'Tính nhiều môn', component: ManySubjectsPage , icon: 'calculator' },
    {title: 'Thông tin phần mềm', component: AboutPage , icon: 'information-circle' }
    ];

    this.pageActive=this.page[0];
    
  }


  openPage(page)
  {
    this.nav.setRoot(page.component);
    this.pageActive=page;
  }

  checkActive(page)
  {
    return page == this.pageActive;
  }

}

