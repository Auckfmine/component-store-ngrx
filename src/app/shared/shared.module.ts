import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAccordion, NgbAccordionModule, NgbPanel} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbAccordionModule,
    NgbAccordion,
    NgbPanel,
  ],
  exports:[
    NgbAccordionModule,
    NgbAccordion,
    NgbPanel,
  ]
})
export class SharedModule { }
