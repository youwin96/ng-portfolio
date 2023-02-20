import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss']
})
export class ChildTestComponent implements OnInit, AfterContentInit {

  @Input() message: string = ""
  @ContentChild('parentElement') parentEl = {} as ElementRef;
  constructor() {
  }
  d = String(new Date());
  a = this.d.slice(0, 24); 

  ngOnInit(): void { 
    

    
  }

  ngAfterContentInit() {
    this.parentEl.nativeElement.textContent = 'from parent text changed to this'
    console.log(this.parentEl?.nativeElement.textContent);
  }



}
