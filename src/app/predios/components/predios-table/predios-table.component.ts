import { Component, OnInit } from '@angular/core';
import { TaxInfo } from 'src/app/shared/models/taxInfo';

@Component({
  selector: "tax-table",
  templateUrl: './predios-table.component.html',
  styleUrls: ['./predios-table.component.scss']
})
export class PrediosTableComponent implements OnInit {
  columnsName: string[] = [
    'receipt',
    'date',
    'year',
    'tax',
    'surcharge',
    'penalty-fee',
    // 'subsidy',
    'total',
    'options'
  ];
  data: TaxInfo[] = [
    {
      receipt: 101029,
      date: new Date(),
      year: 'Enero-2017',
      tax: 1200,
      surcharge: 100.0,
      penalty: 25,
      subsidy: 300.0,
      total: 1325,
      payOut: true
    },
    {
      receipt: 30392,
      date: new Date(),
      year: 'Enero-2018',
      tax: 1200,
      surcharge: 180,
      penalty: 50,
      subsidy: 300.0,
      total: 1430,
      payOut: true
    },
    {
      receipt: 293010,
      date: new Date(),
      year: 'Enero-2019',
      tax: 1500,
      surcharge: 120,
      penalty: 85,
      subsidy: 300,
      total: 1705,
      payOut: false
    }
  ];

  constructor() {
  }

  ngOnInit() {}
}
