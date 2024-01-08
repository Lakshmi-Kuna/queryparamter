import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundQueryComponent } from './notfound-query.component';

describe('NotfoundQueryComponent', () => {
  let component: NotfoundQueryComponent;
  let fixture: ComponentFixture<NotfoundQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundQueryComponent]
    });
    fixture = TestBed.createComponent(NotfoundQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
