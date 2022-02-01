import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueCardComponent } from './colleague-card.component';

describe('ColleagueCardComponent', () => {
  let component: ColleagueCardComponent;
  let fixture: ComponentFixture<ColleagueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColleagueCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
