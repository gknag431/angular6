import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

import { StandingInstruction } from '../model/standingInstruction';
import { ServiceResponse } from 'src/app/common/serviceResponse';

@Injectable()
export class StandingInstructionService{

    //getStandingInstructionsApi = "StandingInstructions/GetStandingInstructions/";
    //getStandingInstructionApi = 'StandingInstructions/GetStandingInstruction/';
    //saveStandingInstructionApi = 'StandingInstructions/SaveStandingInstruction/';
    getStandingInstructionsApi = 'assets/standingInstructions.json';
    getStandingInstructionApi = 'assets/standingInstruction.json';
    saveStandingInstructionApi = 'assets/StandingInstruction.json';
    deleteStandingInstructionApi = '';
    
    constructor(private http:HttpClient) { }

    getStandingInstructions(page: number, pageSize: number): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());

        return this.http.get<ServiceResponse>(this.getStandingInstructionsApi, { params });
    }

    getStandingInstruction(standingInstructionId): Observable<ServiceResponse> {

        const params = new HttpParams()
            .set('standinginstructionId', standingInstructionId);

        return this.http.get<ServiceResponse>(this.getStandingInstructionApi, { params });
    }

    saveStandingInstruction(standingInstruction: StandingInstruction): Observable<ServiceResponse> {

        return this.http.post<ServiceResponse>(this.saveStandingInstructionApi, standingInstruction);
    }

    deleteStandingInstruction(standingInstructionId: number): Observable<ServiceResponse> {
        
        const params = new HttpParams()
                .set('auditorId', standingInstructionId.toString());
            
        return this.http.delete<ServiceResponse>(this.deleteStandingInstructionApi,  { params });
    }
}