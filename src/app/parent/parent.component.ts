//import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
parentMsg: any;

@Input() value="20";
  constructor(private cdr: ChangeDetectorRef) {
   //this.cdr.detach();
    this.cdr.reattach();
  //  if(this.value){
  //     this.cdr.detach();
  //   }
  //   else{
  //     this.cdr.reattach();
  //   }
   }

  ngOnInit(): void {
     setTimeout(() =>{
   this.parentMsg = "welcome";
   //this.cdr.markForCheck();
  // this.cdr.detectChanges();
     }, 2000);
  }
  parentTrigger(){
    console.log("parenttriggered");
  }

}
