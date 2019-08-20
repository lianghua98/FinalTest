import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobComponent } from './alljob.component';

describe('AlljobComponent', () => {
  let component: AlljobComponent;
  let fixture: ComponentFixture<AlljobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
