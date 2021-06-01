import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [RouterTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create LoginComponent instance', () => {
        expect(component).toBeTruthy();
    });
    
    it('should succeed with login function', () => {
        component.loginForm.setValue({ username: 'user@email.com', password: '123' });
        component.handleLogin();
        expect(component.errorMessage).toBe(null);
        expect(component.isLoginSuccess).toBe(true);
    });
    
    it('should fail with login function', () => {
        component.loginForm.setValue({ username: 'user@email.com', password: '12345' });
        component.handleLogin();
        expect(component.errorMessage).toBe('Login Failed');
        expect(component.isLoginSuccess).toBe(false);
    });
    
});
