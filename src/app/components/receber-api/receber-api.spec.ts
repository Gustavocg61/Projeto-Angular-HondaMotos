import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberApi } from './receber-api';

describe('ReceberApi', () => {
  let component: ReceberApi;
  let fixture: ComponentFixture<ReceberApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceberApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
