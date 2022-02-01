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
  viewList = true;

  sortColumn = "name";
  descending = false;
  order: number = 1;

  constructor(private colleaugeService: TrettonColleagueService) { }

  ngOnInit(): void {
    this.colleaugeService.tretton37Colleagues.subscribe(x => {
      this.currentColleagues = x;
    });

    this.colleaugeService.getAllColleagues();
  }

  listView(value: boolean) {
    this.viewList = value;
  }

  sort(by: string = "name") {
    this.sortColumn = by;
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
