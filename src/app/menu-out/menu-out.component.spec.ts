import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOutComponent } from './menu-out.component';

describe('MenuOutComponent', () => {
  let component: MenuOutComponent;
  let fixture: ComponentFixture<MenuOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
