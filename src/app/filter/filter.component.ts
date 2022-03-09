import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() allNfts: number = 0;
  @Input() lowPrice: number = 0;
  @Input() mediumPrice: number = 0;
  @Input() highPrice: number = 0;

  //keep track of the radio button that's selected
  //when radio selected not 'All', the selected radio will be bind to this property
  selectedRadioButtonValue: string = 'All';

  //to create a custom event
  // @Output()
  // filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

}
