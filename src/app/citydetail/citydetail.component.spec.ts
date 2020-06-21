import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitydetailComponent } from './citydetail.component';

describe('CitydetailComponent', () => {
  let component: CitydetailComponent;
  let fixture: ComponentFixture<CitydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
