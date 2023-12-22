import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueryParamsComponent } from '../query-params/query-params.component';
import { SharedRoutingModule } from './shared-routing-module';



@NgModule({
  declarations: [
    QueryParamsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    QueryParamsComponent,
  ],
})
export class SharedModuleModule { }
