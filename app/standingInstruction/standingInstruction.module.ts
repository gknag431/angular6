import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StandingInstructionList } from 'src/app/standingInstruction/views/standingInstruction-list';
import { StandingInstructionDetails } from 'src/app/standingInstruction/views/standingInstruction-details';
import { StandingInstructionService } from 'src/app/standingInstruction/services/standingInstruction.service';
import { standingInstructionRouting } from 'src/app/standingInstruction/standingInstruction.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        standingInstructionRouting
    ],
    declarations: [
        StandingInstructionList,
        StandingInstructionDetails
    ],
    providers: [
        StandingInstructionService
    ]
})
export class StandingInstructionModule { }