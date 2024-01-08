import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQueryComponent } from './register-query.component';

describe('RegisterQueryComponent', () => {
  let component: RegisterQueryComponent;
  let fixture: ComponentFixture<RegisterQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterQueryComponent]
    });
    fixture = TestBed.createComponent(RegisterQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
