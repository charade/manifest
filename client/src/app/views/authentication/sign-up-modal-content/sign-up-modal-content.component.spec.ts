import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModalContentComponent } from './sign-up-modal-content.component';

describe('SignUpModalContentComponent', () => {
  let component: SignUpModalContentComponent;
  let fixture: ComponentFixture<SignUpModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpModalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
