import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemDetailsComponent } from './search-item-details.component';

describe('SearchItemDetailsComponent', () => {
  let component: SearchItemDetailsComponent;
  let fixture: ComponentFixture<SearchItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
