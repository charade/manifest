import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalContentComponent } from './login-modal-content.component';

describe('LoginModalContentComponent', () => {
  let component: LoginModalContentComponent;
  let fixture: ComponentFixture<LoginModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModalContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
