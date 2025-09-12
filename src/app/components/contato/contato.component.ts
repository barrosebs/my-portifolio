import { Component, OnInit } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize animations
    this.initializeAnimations();
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Create mailto link with form data
      const mailtoLink = this.createMailtoLink();
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form after submission
      this.resetForm();
      
      // Show success message (you can implement a toast/notification here)
      console.log('Formulário enviado com sucesso!');
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && 
             this.formData.email && 
             this.formData.subject && 
             this.formData.message);
  }

  private createMailtoLink(): string {
    const to = 'barrosebs@gmail.com';
    const subject = encodeURIComponent(`[Portfólio] ${this.formData.subject}`);
    const body = encodeURIComponent(
      `Olá Eduardo,\n\n` +
      `Nome: ${this.formData.name}\n` +
      `Email: ${this.formData.email}\n\n` +
      `Mensagem:\n${this.formData.message}\n\n` +
      `---\n` +
      `Mensagem enviada através do portfólio`
    );
    
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  private initializeAnimations(): void {
    // Add staggered animation delays for contact methods
    setTimeout(() => {
      const contactMethods = document.querySelectorAll('.contact-method');
      contactMethods.forEach((method, index) => {
        setTimeout(() => {
          method.classList.add('animate-in');
        }, index * 150);
      });
    }, 500);

    // Add animation for social cards
    setTimeout(() => {
      const socialCards = document.querySelectorAll('.social-card');
      socialCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 100);
      });
    }, 1000);
  }

  // Utility methods for contact actions
  openWhatsApp(): void {
    const phoneNumber = '5571996407566';
    const message = encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  sendEmail(): void {
    const emailUrl = 'mailto:barrosebs@gmail.com?subject=Contato via Portfólio&body=Olá Eduardo, vi seu portfólio e gostaria de conversar sobre...';
    window.location.href = emailUrl;
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/barrosebs/', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/barrosebs', '_blank');
  }

  callPhone(): void {
    window.location.href = 'tel:+5571996407566';
  }
}