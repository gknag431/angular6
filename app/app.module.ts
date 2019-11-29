import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { CommonService } from 'src/app/common/commonServices';



import{ StandingInstructionModule } from 'src/app/standingInstruction/standingInstruction.module';
import{ StandingInstructionService } from 'src/app/standingInstruction/services/standingInstruction.service';

import { AccountService } from './account/accountServices';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
 
    StandingInstructionModule
   
   

  ],
  providers: [
    AccountService,
    StandingInstructionService,
    CommonService,
   
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
