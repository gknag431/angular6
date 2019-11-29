import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingInstructionList } from 'src/app/standingInstruction/views/standingInstruction-list';
import { StandingInstructionDetails } from 'src/app/standingInstruction/views/standingInstruction-details';

export const standingInstructionRoutes: Routes = [
    {
        path: 'standingInstruction',
        children: [
            { path: '', component: StandingInstructionList },
            { path: 'standingInstructionDetails', component: StandingInstructionDetails },
            { path: 'standingInstructionDetails/:id/:isView', component: StandingInstructionDetails },
        ]
    },
];

export const standingInstructionRouting: ModuleWithProviders = RouterModule.forChild(standingInstructionRoutes);
