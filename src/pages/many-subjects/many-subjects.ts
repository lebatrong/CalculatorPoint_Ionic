import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController ,AlertController  } from 'ionic-angular';



@IonicPage()
@Component({
	selector: 'page-many-subjects',
	templateUrl: 'many-subjects.html',
})
export class ManySubjectsPage {

	public isShowDiemFull: boolean = false;
	public isEditing: boolean = false;

	public maxOption: Array<{values: number , title: string }>;
	public arrPoint: Array <{ id: number, diem10: number , diem40: number , diem50: number , tinchi: number }>;

	public arrDiem: Array<{id: number, diem: number , tinchi: number }>; 

	public soluong : number = 1;
	public count: number = 0;
	public diem10: number;
	public diem40: number;
	public diem50: number;
	public tinchi: number;
	public dem: number = 1;
	public DiemHe_10: number;


	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController) {

		this.maxOption= [
		{ values: 1, title: '1 môn' },
		{ values: 2, title: '2 môn' },
		{ values: 3, title: '3 môn' },
		{ values: 4, title: '4 môn' },
		{ values: 5, title: '5 môn' },
		{ values: 6, title: '6 môn' },
		{ values: 7, title: '7 môn' },
		{ values: 8, title: '8 môn' },
		{ values: 9, title: '9 môn' },
		{ values: 10, title: '10 môn' },
		{ values: 11, title: '11 môn' },
		{ values: 12, title: '12 môn' },
		{ values: 13, title: '13 môn' },
		{ values: 14, title: '14 môn' },
		{ values: 15, title: '15 môn' },
		{ values: 16, title: '16 môn' },
		{ values: 17, title: '17 môn' },
		{ values: 18, title: '18 môn' },
		{ values: 19, title: '19 môn' },
		{ values: 20, title: '20 môn' }	
		];

		

	}




	showPoint(content: string)
	{
		let alert = this.alertCtrl.create({
			title: 'Điểm của bạn!',
			subTitle: content,
			buttons: ['OK']
		});
		alert.present();
	}

	presentToast(content: string) {
		let toast = this.toastCtrl.create({
			message: content,
			duration: 3000,
			position: 'middle'
		});
		toast.present();
	}


	addPointToArray()
	{
		var pattern = /^[0-9]{1,2}\.{0,1}[0-9]{0,1}$/;
		
		if(this.count < this.soluong){
			if(!this.isShowDiemFull){
			//Kiểm tra có phải số không
			if(this.diem10!=null && this.diem40!=null && this.diem50!=null && pattern.test(this.diem10.toString()) && pattern.test(this.diem40.toString()) && pattern.test(this.diem50.toString()) && !isNaN(this.diem10) && !isNaN(this.diem40) && !isNaN(this.diem50) && !isNaN(this.tinchi) &&!isNaN(this.diem10) && !isNaN(this.diem40) && !isNaN(this.diem50) && !isNaN(this.tinchi)){
				if(this.diem10 <= 10 && this.diem40 <= 10 && this.diem50 <= 10 && this.diem10 >= 0 && this.diem40 >= 0 && this.diem50 >= 0 && this.tinchi>0){
					this.addArr(this.diem10, this.diem40, this.diem50, this.tinchi);
					this.count++;
					this.isEditing=false;
					this.diem10=null;
					this.diem40=null;
					this.diem50=null;
					this.tinchi=null;
					if(this.dem < this.soluong)
						this.dem++;
				}else
				{
					this.presentToast('Điểm gì mà ngộ dữ vậy Man! Đừng có đùa tôi chứ!');
				}
			}else
			{
				this.presentToast('Điểm của bạn lạ quá! Tính nó sai tùm lum');
			}
		}else
		{
			if(this.DiemHe_10!=null && pattern.test(this.DiemHe_10.toString()) && !isNaN(this.DiemHe_10) && !isNaN(this.tinchi)){
				if(this.DiemHe_10 <= 10 && this.DiemHe_10 >= 0 && this.tinchi>0){
						/*
						Thực hiện tính điểm chỉ hệ 10
						*/
						this.addArrDiem(this.DiemHe_10,this.tinchi);
						this.count++;
						if(this.dem < this.soluong)
							this.dem++;
						this.DiemHe_10=null;
						this.tinchi=null;
						this.isEditing=false;
					}else
					{
						this.presentToast('Điểm gì mà ngộ dữ vậy Man! Đừng có đùa tôi chứ!');
					}
				}else
				{
					this.presentToast('Điểm của bạn lạ quá! Tính nó sai tùm lum');
				}
			}
		}else
		{
			this.isEditing = false;
			if(!this.isShowDiemFull){
				let diemhe_10: string='Điểm hệ 10: <b>'+this.calculator_10()+'</b><br>';
				let diemhe_4: string='Điểm hệ 4: <b>'+this.calculator_4()+'</b><br>';
				let xeploai: string='Xếp loại: <b>'+this.XepLoai( this.calculator_4() )+'</b>';
				this.showPoint(diemhe_10+diemhe_4+xeploai);
			}
			else
			{
				let diemhe_10: string='Điểm hệ 10: <b>'+this.caculator_He10_Only_10()+'</b><br>';
				let diemhe_4: string='Điểm hệ 4: <b>'+this.calculator_He4_Only_10() +'</b><br>';
				let xeploai: string='Xếp loại: <b>'+this.XepLoai( this.calculator_He4_Only_10() )+'</b>';
				this.showPoint(diemhe_10+diemhe_4+xeploai);
			}
		}

	}


	addArrDiem(diem: number, tinchi: number)
	{
		if(this.arrDiem==null){
			this.arrDiem=[{
				id: 1,
				diem: diem,
				tinchi: tinchi
			}];
		}else{
			this.arrDiem.push({
				id: this.dem,
				diem: diem,
				tinchi: tinchi
			});
		}
	}

	addArr(diem10: number, diem40: number, diem50: number, tinchi: number)
	{
		if(this.arrPoint==null){
			this.arrPoint=[{
				id: 1,
				diem10: diem10,
				diem40: diem40,
				diem50: diem50,
				tinchi: tinchi
			}];
		}else{
			this.arrPoint.push({
				id: this.dem,
				diem10: diem10,
				diem40: diem40,
				diem50: diem50,
				tinchi: tinchi
			});
		}
	}

	caculator_He10_Only_10()
	{
		var TongTC: number = 0;
		for( let i=0 ; i < this.arrDiem.length ; i++)
		{
			TongTC = TongTC + parseInt(this.arrDiem[i].tinchi.toString());
		}
		console.log('Tông tc là: '+TongTC);

		var DiemHe10: number = 0;
		for( let i=0 ; i < this.arrDiem.length ; i++)
		{
			DiemHe10 += parseFloat( (parseFloat(this.arrDiem[i].diem.toString()) * parseInt(this.arrDiem[i].tinchi.toString())).toFixed(3));
		}

		return Math.round((DiemHe10 / TongTC) * 100) / 100;

	}
	calculator_He4_Only_10()
	{
		//Tính tổng tín chỉ
		var TongTC: number = 0;
		for( let i=0 ; i < this.arrDiem.length ; i++)
		{
			TongTC = TongTC + parseInt(this.arrDiem[i].tinchi.toString());
		}
		console.log('Tông tc là: '+TongTC);

		//Tính điểm chữ:
		var diemhe4: number = 0;
		var temp: number;
		for( let i=0 ; i < this.arrDiem.length ; i++)
		{
			if(this.arrDiem[i].diem >= 8.5)
				temp = 4.0;
			else if(this.arrDiem[i].diem >=7.8)
				temp=3.5;
			else if(this.arrDiem[i].diem >= 7.0)
				temp = 3.0;
			else if(this.arrDiem[i].diem >= 6.3)
				temp = 2.5;
			else if(this.arrDiem[i].diem >= 5.5)
				temp = 2.0;
			else if(this.arrDiem[i].diem >= 4.8)
				temp = 1.5;
			else if(this.arrDiem[i].diem >= 4.0)
				temp = 1.0;
			else
				temp = 0;

			diemhe4 += (temp * this.arrDiem[i].tinchi );
		}

		//Tính điểm từng môn:
		
		console.log('Điểm hệ 4: '+ diemhe4);

		//Chia tổng số tín chỉ:
		return Math.round( (diemhe4 / TongTC) * 100) / 100; 
	}

	calculator_10()
	{
		//Lấy tổng tính chỉ
		var TongTC: number = 0;
		for( let i=0 ; i < this.arrPoint.length ; i++)
		{
			TongTC = TongTC + parseInt(this.arrPoint[i].tinchi.toString());
		}
		//console.log('Tổng tín chỉ: '+TongTC);
		//Lấy điểm hệ 10
		var temp = [];
		for( let i = 0 ; i < this.arrPoint.length ; i++)
		{
			temp[i]=Math.round(parseFloat(((parseFloat(this.arrPoint[i].diem10.toString()) + ( parseFloat(this.arrPoint[i].diem40.toString()) * 4) + (parseFloat(this.arrPoint[i].diem50.toString()) * 5))/10).toFixed(2))*10)/10;
		}
		//console.log('Mảng điểm: '+ temp);
		//Tính tổng điểm theo số tín chỉ
		var diem: number = 0;

		for( let i = 0 ; i < this.arrPoint.length ; i++)
		{
			diem = diem + (parseFloat(this.arrPoint[i].tinchi.toString()) * parseFloat(temp[i])); 	
		}

		diem=parseFloat((diem/TongTC).toFixed(3)) ;
		//console.log('Điểm là: '+ diem );
		//Chia cho số tín chỉ
		return Math.round(diem * 100) / 100;
	}

	calculator_4()
	{
		//Tính tổng tín chỉ và điểm hệ 10
		var TongTC: number = 0;
		var diemhe10 = [];
		for( let i=0 ; i < this.arrPoint.length ; i++)
		{
			TongTC = TongTC + parseInt(this.arrPoint[i].tinchi.toString());
			diemhe10[i] = Math.round( parseFloat((( parseFloat(this.arrPoint[i].diem10.toString()) + ( parseFloat(this.arrPoint[i].diem40.toString()) * 4) + ( parseFloat(this.arrPoint[i].diem50.toString()) * 5)) / 10).toFixed(3)) *100) /100;
		}
		console.log('Tông tc là: '+TongTC);
		console.log('Obj điểm là: '+diemhe10);

		//Tính điểm chữ:
		var diemhe4: number = 0;
		var temp: number;
		for( let i=0 ; i < this.arrPoint.length ; i++)
		{
			if(diemhe10[i] >= 8.5)
				temp = 4.0;
			else if(diemhe10[i] >=7.8)
				temp=3.5;
			else if(diemhe10[i] >= 7.0)
				temp = 3.0;
			else if(diemhe10[i] >= 6.3)
				temp = 2.5;
			else if(diemhe10[i] >= 5.5)
				temp = 2.0;
			else if(diemhe10[i] >= 4.8)
				temp = 1.5;
			else if(diemhe10[i] >= 4.0)
				temp = 1.0;
			else
				temp = 0;

			diemhe4 += (temp * this.arrPoint[i].tinchi );
		}

		//Tính điểm từng môn:
		
		console.log('Điểm hệ 4: '+ diemhe4);

		//Chia tổng số tín chỉ:
		return Math.round( (diemhe4 / TongTC) * 100) / 100; 
	}

	
	XepLoai(  n : number)
	{
		
		var classify: string = '';
		if(n >= 3.60)
			classify='Xuất sắc';
		else if(n >= 3.20)
			classify='Giỏi';
		else if(n >=2.50)
			classify='Khá';
		else if(n >=2.00)
			classify='Trung bình';
		else
			classify='Yếu ';

		return classify;
	}

	ResetAll()
	{
		this.soluong=1;
		this.dem=1;
		this.count=0;
		this.diem10=null;
		this.diem40=null;
		this.diem50=null;
		this.tinchi=null;
		//Xóa mảng
		if(this.arrPoint!=null)
			this.arrPoint.splice(0,this.arrPoint.length);
		if(this.arrDiem!=null)
			this.arrDiem.splice(0,this.arrDiem.length);
	}

	EditArray(id: number, type: number) //1 là arraypoint     2 là arrdiem
	{
		console.log('id ' + id);	
		this.isEditing = true;
		var index:number;
		if(type==1)
		{
			index = this.arrPoint.findIndex(w => w.id === id);
			this.diem10= this.arrPoint[index].diem10;
			this.diem40= this.arrPoint[index].diem40;
			this.diem50= this.arrPoint[index].diem50;
			this.tinchi= this.arrPoint[index].tinchi;
			this.dem=id;
			this.count-=1;
			this.arrPoint.splice(index,1);
		}else{
			index = this.arrDiem.findIndex(w => w.id === id);
			this.DiemHe_10=this.arrDiem[index].diem;
			this.tinchi=this.arrDiem[index].tinchi;
			this.dem=id;
			this.count-=1;
			this.arrDiem.splice(index,1);
		}
	}




}
