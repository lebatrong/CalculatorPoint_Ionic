import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-one-subjects',
	templateUrl: 'one-subjects.html',
})
export class OneSubjectsPage {

	public isShowPanel: boolean; 
	public diemhe10: number;
	public diemhe4: number;
	public diemchu: string;
	public diem10: number;
	public diem40: number;
	public diem50: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
		this.isShowPanel = false;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OneSubjectsPage');
	}

	onCalculator()
	{
		var pattern = /^[0-9]{1,2}\.{0,1}[0-9]{0,1}$/;

		if(this.diem10!=null && this.diem40!=null && this.diem50!=null && pattern.test(this.diem10.toString()) && pattern.test(this.diem40.toString()) && pattern.test(this.diem50.toString()) && !isNaN(this.diem10) && !isNaN(this.diem40) && !isNaN(this.diem50 ) ){
			if(this.diem10 <= 10 && this.diem40 <= 10 && this.diem50 <= 10 && this.diem10 >= 0 && this.diem40 >= 0 && this.diem50 >= 0 ){
				if(this.diem50 > 3.0){
				//Điểm hệ 10
				var temp = ((parseFloat(this.diem10.toString()) + ( parseFloat(this.diem40.toString()) * 4) + (parseFloat(this.diem50.toString()) * 5))/10);
				this.diemhe10 = Math.round(parseFloat( temp.toFixed(2)) * 10) /10 ;
				//Điểm chữ
				this.TinhDiemChu();
				//Điểm hệ 4:
				this.TinhDiemHe4();

				this.isShowPanel=true;
				}else{
					this.diemhe10=0;
					this.diemhe4=0;
					this.diemchu='F';
					this.isShowPanel=true;
				}
			}else
			{
				this.presentToast('Dữ liệu không đúng rồi!');
				this.isShowPanel=false;
			}
		}else
		{
			this.presentToast('Có gì đó sai sai, kiểm tra lại hộ tui với!');
			this.isShowPanel=false;
		}
	}


	TinhDiemChu()
	{
		if(this.diemhe10 >= 8.5)
			this.diemchu='A';
		else if(this.diemhe10 >=7.8)
			this.diemchu='B+';
		else if(this.diemhe10 >= 7.0)
			this.diemchu='B';
		else if(this.diemhe10 >= 6.3)
			this.diemchu='C+';
		else if(this.diemhe10 >= 5.5)
			this.diemchu='C';
		else if(this.diemhe10 >= 4.8)
			this.diemchu='D+';
		else if(this.diemhe10 >= 4.0)
			this.diemchu='C';
		else
			this.diemchu='F';
	}
	TinhDiemHe4()
	{
		if(this.diemchu == 'A')
			this.diemhe4=4.0;
		else if(this.diemchu=='B+')
			this.diemhe4=3.5;
		else if(this.diemchu=='B')
			this.diemhe4=3.0;
		else if(this.diemchu=='C+')
			this.diemhe4=2.5;
		else if(this.diemchu=='C')
			this.diemhe4=2.0;
		else if(this.diemchu=='D+')
			this.diemhe4=1.5;
		else if(this.diemchu=='D')
			this.diemhe4=1.0;
		else if(this.diemchu=='F')
			this.diemhe4=0;
	}

	presentToast(content: string) {
		let toast = this.toastCtrl.create({
			message: content,
			duration: 3000,
			position: 'middle'
		});
		toast.present();
	}


}
