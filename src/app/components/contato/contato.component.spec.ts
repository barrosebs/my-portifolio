import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ContatoComponent } from './contato.component';

describe('ContatoComponent', () => {
  let component: ContatoComponent;
  let fixture: ComponentFixture<ContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form data', () => {
    expect(component.formData).toBeDefined();
    expect(component.formData.name).toBe('');
    expect(component.formData.email).toBe('');
    expect(component.formData.subject).toBe('');
    expect(component.formData.message).toBe('');
  });

  it('should validate form correctly', () => {
    // Test empty form
    expect(component['isFormValid']()).toBeFalsy();
    
    // Test filled form
    component.formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message'
    };
    expect(component['isFormValid']()).toBeTruthy();
  });

  it('should create mailto link correctly', () => {
    component.formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message'
    };
    
    const mailtoLink = component['createMailtoLink']();
    expect(mailtoLink).toContain('mailto:barrosebs@gmail.com');
    expect(mailtoLink).toContain('Test%20User');
    expect(mailtoLink).toContain('Test%20Subject');
  });

  it('should reset form after submission', () => {
    component.formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message'
    };
    
    component['resetForm']();
    
    expect(component.formData.name).toBe('');
    expect(component.formData.email).toBe('');
    expect(component.formData.subject).toBe('');
    expect(component.formData.message).toBe('');
  });
});