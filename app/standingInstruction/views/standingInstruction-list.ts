import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {StandingInstructionService} from '../services/standingInstruction.service';
import { StandingInstruction } from 'src/app/standingInstruction/model/standingInstruction';
import { CommonService } from 'src/app/common/commonServices';

declare var $: any

@Component({
  templateUrl: './standingInstruction-list.html',
 
})
export class StandingInstructionList implements OnInit {

  standingInstructions = new Array<StandingInstruction>();
  currentPage: number;
  pageSize: number = 15;
  totalPages: number = 0;
  totalRecords: number = 0;
  statusMessage: string = "";

  constructor(
      private standingInstructionService: StandingInstructionService, 
      private commonService: CommonService) { }

  ngOnInit() {
      
      this.currentPage = 1;
      this.totalPages = 0;
      this.totalRecords = 0;
      this.statusMessage = "Loading standing instruction...";

      this.getStandingInstructionServices();
      
      $(document).ready( function () {
        $('#StandingInstructionList').DataTable();
      });
    }

  private getStandingInstructionServices() {
 
      this.standingInstructionService.getStandingInstructions(this.currentPage, this.pageSize)
          .subscribe(
            standingInstructions => {
                  if (standingInstructions["data"]) {
                      this.standingInstructions = standingInstructions["data"];
                      this.totalRecords = standingInstructions["recordCount"];
                      this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
                  }
  
                  if (this.standingInstructions == null || this.standingInstructions.length === 0)
                      this.statusMessage = "There are no standing instruction.";
  
              },
              (err) => {
                  var msg = "Error fetching Standing instruction.";
                  this.commonService.showAlertMessage(msg, "error");
              });
  }
  
  delete(id: number ) {
    if(confirm("Are You sure want to delete ? ")) {
        this.standingInstructionService.deleteStandingInstruction(id).subscribe(
            status => {
                let msg = "Standing Instruction deleted.";
                this.commonService.showAlertMessage(msg, "success");
            },
            (err) => {
                var msg = "Error deleting ";
                this.commonService.showAlertMessage(msg, "error");
            });
    }
}
}
