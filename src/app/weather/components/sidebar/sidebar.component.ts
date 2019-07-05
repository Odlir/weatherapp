import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Input() cities: any[];
	@Output() valueChange = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	valueChanged(e:string): void{
		this.valueChange.emit(e);
	}

}
