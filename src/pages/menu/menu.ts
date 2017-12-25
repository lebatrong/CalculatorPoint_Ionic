import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { Component ,ViewChild } from '@angular/core';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon?: string;
}

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})


export class MenuPage {

	rootPage = 'HomePage';

	@ViewChild(Nav) nav: Nav;

	page : PageInterface[] = [
		{title: 'Trang chủ' , pageName: 'HomePage' , tabComponent: 'HomePage', index: 0 , icon: 'home'},
		{title: 'Tính từng môn' , pageName: 'OneSubjectsPage' , tabComponent: 'OneSubjectsPage', index: 1 , icon: 'calculator'},
		{title: 'Thông tin' , pageName: 'AboutPage' , tabComponent: 'AboutPage', index: 2 , icon: 'information-circle'},
		{title: 'Phỏng đoán' , pageName: 'GuessPage' },
		{title: 'Tính nhiều môn' , pageName: 'ManySubjectsPage' }
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	openPage(page : PageInterface)
	{

	}

	checkActive(page : PageInterface)
	{
		
	}


}
