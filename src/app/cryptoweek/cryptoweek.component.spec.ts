import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoweekComponent } from './cryptoweek.component';

describe('CryptoweekComponent', () => {
  let component: CryptoweekComponent;
  let fixture: ComponentFixture<CryptoweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
