import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemContentComponent } from './carousel-item-content.component';

describe('CarouselItemContentComponent', () => {
  let component: CarouselItemContentComponent;
  let fixture: ComponentFixture<CarouselItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
