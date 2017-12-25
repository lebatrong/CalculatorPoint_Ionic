import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-homepage',
	templateUrl: 'homepage.html',
})
export class HomepagePage {


	public aboutpage = 'AboutPage';
	public calculatorpage  = 'OneSubjectsPage';
	public homepage ='HomePage';
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	

}
