import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	public url: string = 'https://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&lang=es&q=';
	public urlForecast: string = 'https://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&lang=es&days=7&q=​';
	public urlLocation: string = 'https://ipinfo.io?token=819de932dff004';

	constructor(private http: HttpClient) {
	}

	getWeather(city): Observable<any>{
		return this.http.get(this.url + city);
	}

	getWeatherPrediction(city): Observable<any>{
		return this.http.get(this.urlForecast + city);
	}

	//getting lat and lng to get current location
	getPosition(): Promise<any>{
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resp => {
					resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
				},err => {
					reject(err);
				});
		});
	}

	getCurrentLocation(): Observable<any> {
		return this.http.get(this.urlLocation);
	}

}
