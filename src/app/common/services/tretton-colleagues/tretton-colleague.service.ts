import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../api-client.service';
import { ITrettonColleague } from './tretton-colleague.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrettonColleagueService {
  tretton37Colleagues: BehaviorSubject<ITrettonColleague[]> = new BehaviorSubject<ITrettonColleague[]>([]);

  constructor(
    private api: ApiClientService
  ) { }

  public getAllColleagues(): void {
    const options = {
      headers: new HttpHeaders().append('Authorization', environment.trettonApiAuth),
    }

    this.api.get(environment.trettonApiUrl, options).subscribe(res => {
      this.tretton37Colleagues.next(res as ITrettonColleague[]);
    })
  }
}
