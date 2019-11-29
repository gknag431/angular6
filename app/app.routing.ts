import { Routes, RouterModule } from '@angular/router';


import { StandingInstructionList } from './standingInstruction/views/standingInstruction-list'
const appRoutes: Routes = [
     
    //{ path: 'getAcRequest', redirectTo: 'acRequest', pathMatch: 'full' },
    // { path: 'auditor', loadChildren: './auditor/auditor.module#AuditorModule' },
     { path: '', component :StandingInstructionList }
    // { path: 'specialPricing', loadChildren: './specialPricing/specialPricing.module#SpecialPricingModule' },
    // { path: 'standingInstruction', loadChildren: './standingInstruction/standingInstruction.module#StandingInstructionModule' },
    // { path: 'syndicatedLoanCustomer', loadChildren: './syndicatedLoanCustomer/syndicatedLoanCustomer.module#SyndicatedLoanCustomerModule' },
    //  { path: '', redirectTo: '', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);