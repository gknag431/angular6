import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StandingInstruction } from '../model/standingInstruction';
import { StandingInstructionService } from '../services/standingInstruction.service';
import { CommonService } from '../../common/commonServices';

@Component({
  templateUrl: './standingInstruction-details.html',
  providers: [StandingInstructionService],
 
})
export class StandingInstructionDetails implements OnInit {

  standingInstructionId: string = "";
  standingInstruction: StandingInstruction = new StandingInstruction();
  isView: string = "false";
  title: string = "New Standing Instruction";

  constructor(
      private router: Router, 
      private route: ActivatedRoute, 
      private standingInstructionService: StandingInstructionService,
      private commonService: CommonService) { }

  ngOnInit() {
      this.route.params.subscribe(
          params => {
              this.standingInstructionId = params['id'];
              this.isView = params['isView'];

              if (this.standingInstructionId != null){
                  if (this.isView == "true")
                      this.title = "View Standing Instruction";
                  else
                      this.title = "Edit Standing Instruction";
              }
              this.getStandingInstructionDetails(this.standingInstructionId);
          });
  }

  getStandingInstructionDetails(standingInstructionId: string) {

      if (this.standingInstructionId != null && this.standingInstructionId != "") {

          this.standingInstructionService.getStandingInstruction(standingInstructionId).subscribe(
            standingInstruction => {
                  this.standingInstruction = standingInstruction["data"];
              },
              (err) => {
                  let msg = "Error getting standinginstruction details.";
                  this.commonService.showAlertMessage(msg, "error");
              });
      }
      else
          this.standingInstruction = new StandingInstruction();
  }
  
  saveStandingInstruction(){
      var errorMessages = this.validateStandingInstruction(this.standingInstruction);

      if (errorMessages.length == 0) {

          this.standingInstructionService.saveStandingInstruction(this.standingInstruction)
              .subscribe(standingInstruction => {
                  this.standingInstruction = standingInstruction["data"];

                  var msg = "Standinginstruction information saved";
                  this.commonService.showAlertMessage(msg, "success");

                  this.goBack();
              },
              err => {
                  let msg = "Unable to save Standing instruction information.";
                  this.commonService.showAlertMessage(msg, "error");
              });
      }
      else {
          this.commonService.showAlertMessage(this.commonService.GetErrorMessagesText(errorMessages), "error");
      }
  }

  validateStandingInstruction(standingInstruction: StandingInstruction): string[] {
      var errorMessages = [];

      if (standingInstruction.customerName == "")
          errorMessages.push("Customer Name cannot be empty");
      
      if (standingInstruction.auditorName == "")
          errorMessages.push("Auditor name cannot be empty");
      
      if (standingInstruction.expiryDate == "")
          errorMessages.push("Expiry Date cannot be empty");
      
      if (standingInstruction.standingInstructions == "")
          errorMessages.push("Standing Instruction name cannot be empty");
      
      // Add other validations here
      return errorMessages;
  }
  
  goBack(): void {
      this.router.navigate(['/standingInstruction']);
  }
}
