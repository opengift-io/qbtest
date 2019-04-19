import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBagComponent } from './app-bag.component';

describe('AppBagComponent', () => {
  let component: AppBagComponent;
  let fixture: ComponentFixture<AppBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
