import { Component, OnInit } from '@angular/core';
import { ITrettonColleague } from 'src/app/common/services/tretton-colleagues/tretton-colleague.model';
import { TrettonColleagueService } from 'src/app/common/services/tretton-colleagues/tretton-colleague.service';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.scss']
})
export class ColleaguesComponent implements OnInit {
  currentColleagues: ITrettonColleague[] = [];
  searchText: string = '';

  constructor(
    private colleaugeService: TrettonColleagueService,
  ) { }

  ngOnInit(): void {
    this.colleaugeService.tretton37Colleagues.subscribe(x => {
      if (!x) { return; }
      this.currentColleagues = x;

    });

    this.colleaugeService.getAllColleagues();
  }

}
