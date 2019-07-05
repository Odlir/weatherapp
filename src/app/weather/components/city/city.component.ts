import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit{

	placeholder:string = 'El tiempo en...';
	currentWeather: any;
	forecast: any;
	tipo:boolean = true;
	getDataSub: Subscription;
	getDataFor: Subscription;
	getDataLoc: Subscription;
	cities = ['Lima', 'Mendoza', 'Buenos Aires', 'Bogota'];

	constructor(private weatherService: WeatherService) { }

	ngOnInit(){
		this.getLocation();
	}

	getLocation(): void {
		this.getDataLoc = this.weatherService.getCurrentLocation().subscribe( data => {
			let city = this.cities[0];
			if (data.region != '' || data.region != null){
				city = data.region;
			}
			this.getCurrentWeather(city);
			this.getForecast(city);
		}, err => this.getDataLoc.unsubscribe());
	}

	getCurrentWeather(city: string): void {
		this.getDataSub = this.weatherService.getWeather(city).subscribe( data => {
			this.currentWeather = data;
		},error => this.getDataSub.unsubscribe());
	}

	getForecast(city: string): void {
		this.getDataFor = this.weatherService.getWeatherPrediction(city).subscribe( data => {
			this.forecast = data;
		}, error => this.getDataFor.unsubscribe());
	}

	onSubmit(e: any){
		let city = e.split(',')[0];
		this.getCurrentWeather(city);
		this.getForecast(city);
	}

	getLocationWeather(sede:string):void{
		this.getCurrentWeather(sede);
		this.getForecast(sede);
	}

	setAddress(addrObj) {
		//console.log('odlir', addrObj.locality);
	}

	changeCent(): void {
		this.tipo = true;
	}

	changeFar(): void {
		this.tipo = false;
	}

	ngOnDestroy(): void {
		if (this.getDataSub) { this.getDataSub.unsubscribe(); }
		if (this.getDataFor) { this.getDataFor.unsubscribe(); }
		if (this.getDataLoc) { this.getDataLoc.unsubscribe(); }
	}

}
