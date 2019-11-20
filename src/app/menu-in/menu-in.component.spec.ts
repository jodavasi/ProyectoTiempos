import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInComponent } from './menu-in.component';

describe('MenuInComponent', () => {
  let component: MenuInComponent;
  let fixture: ComponentFixture<MenuInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
