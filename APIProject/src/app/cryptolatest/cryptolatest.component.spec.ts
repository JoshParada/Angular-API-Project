import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptolatestComponent } from './cryptolatest.component';

describe('CryptolatestComponent', () => {
  let component: CryptolatestComponent;
  let fixture: ComponentFixture<CryptolatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptolatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptolatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
