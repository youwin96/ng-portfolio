import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss']
})
export class ChildTestComponent implements OnInit {

  @Input() message: string = ""

  constructor() {
  }
  ngOnInit(): void {
  }

}
