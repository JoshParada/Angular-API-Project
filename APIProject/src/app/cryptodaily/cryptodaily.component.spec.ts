import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptodailyComponent } from './cryptodaily.component';

describe('CryptodailyComponent', () => {
  let component: CryptodailyComponent;
  let fixture: ComponentFixture<CryptodailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptodailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptodailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
