import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITrettonColleague } from './tretton-colleague.model';

@Injectable({
  providedIn: 'root'
})
export class TrettonColleagueService {
  tretton37Colleagues: BehaviorSubject<ITrettonColleague[]> = new BehaviorSubject<ITrettonColleague[]>([]);

  private colleaguesMOCK: ITrettonColleague[] = [
    {
      name: 'Matt Chorsey',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",
      office: 'Test1'
    },
    {
      name: 'Lauren Ruthford',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",
      office: 'Test2'
    },
    {
      name: 'Jordan Firth',
      office: 'Test2',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",
    },
    {
      name: 'Bill Thomas',
      office: 'Test3',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",

    },
    {
      name: 'Joanne Pollan',
      office: 'Test',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",

    },
    {
      name: 'Andrea Cornerston',
      office: 'Test',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",

    },
    {
      name: 'Moe Chamont',
      office: 'Test',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",

    },
    {
      name: 'Kelly Richardson',
      office: 'Test',
      imageUrl: "https://www.cnet.com/a/img/dGLoSSBoZyqv3nrKZ2AEAW5vduc=/1092x0/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg",
    }
  ];

  constructor(
    // Todo: Tretton37ColleagueApiClient
  ) {
    this.tretton37Colleagues.next(this.colleaguesMOCK);
  }


  public getAllColleagues(): ITrettonColleague[] {
    return this.colleaguesMOCK; // Todo
  }
}
