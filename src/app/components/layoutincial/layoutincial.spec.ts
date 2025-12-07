import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutincial } from './layoutincial';

describe('Layoutincial', () => {
  let component: Layoutincial;
  let fixture: ComponentFixture<Layoutincial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutincial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layoutincial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
