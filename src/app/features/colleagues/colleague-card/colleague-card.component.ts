import { Component, Input, OnInit } from '@angular/core';
import { ITrettonColleague } from 'src/app/common/services/tretton-colleagues/tretton-colleague.model';

@Component({
  selector: 'app-colleague-card',
  templateUrl: './colleague-card.component.html',
  styleUrls: ['./colleague-card.component.scss']
})
export class ColleagueCardComponent implements OnInit {
  @Input()
  data!: ITrettonColleague;

  constructor() { }

  ngOnInit(): void {
  }

}
