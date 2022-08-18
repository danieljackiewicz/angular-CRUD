import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationList } from './destination-list.component';

describe('HomeComponent', () => {
  let component: DestinationList;
  let fixture: ComponentFixture<DestinationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationList],
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
