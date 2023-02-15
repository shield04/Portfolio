import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBurgerComponent } from './svg-burger.component';

describe('SvgBurgerComponent', () => {
  let component: SvgBurgerComponent;
  let fixture: ComponentFixture<SvgBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
