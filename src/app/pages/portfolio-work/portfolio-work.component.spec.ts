import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWorkComponent } from './portfolio-work.component';

describe('PortfolioWorkComponent', () => {
  let component: PortfolioWorkComponent;
  let fixture: ComponentFixture<PortfolioWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
