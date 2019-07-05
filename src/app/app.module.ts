import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { HeaderComponent } from './weather/components/header/header.component';
import { CityComponent } from './weather/components/city/city.component';
import { GooglePlacesDirective } from './weather/directive/google-places.directive';
import { ForecastListComponent } from './weather/components/city/forecast-list/forecast-list.component';
import { SidebarComponent } from './weather/components/sidebar/sidebar.component';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CityComponent,
		GooglePlacesDirective,
		ForecastListComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		GooglePlaceModule
	],
	providers: [{provide: LOCALE_ID, useValue: 'es'}],
	bootstrap: [AppComponent]
})
export class AppModule { }
