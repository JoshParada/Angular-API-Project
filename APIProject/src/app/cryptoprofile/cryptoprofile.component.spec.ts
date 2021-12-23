import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoprofileComponent } from './cryptoprofile.component';

describe('CryptoprofileComponent', () => {
  let component: CryptoprofileComponent;
  let fixture: ComponentFixture<CryptoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
