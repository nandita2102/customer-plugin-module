import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModuleSet } from 'src/common/material-module';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleSet
  ],
  entryComponents: [CustomerComponent],
  providers: [{
    provide: 'plugins',
    useValue: [{
      name: 'customer-component',
      component: CustomerComponent
    }],
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
