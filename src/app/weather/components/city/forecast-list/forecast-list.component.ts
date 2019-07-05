import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  @Input() data: any[];
  @Input() tipo: boolean;

  constructor() { }

  ngOnInit() {
  }

}
