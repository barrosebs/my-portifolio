import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  expandir: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Component initialization
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      this.expandir = false;
      document.body.style.overflow = '';
    }
  }

  expandirMenu(): void {
    this.expandir = !this.expandir;
    
    // Prevent body scroll when mobile menu is open
    if (this.expandir) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu after navigation
    this.expandir = false;
    document.body.style.overflow = '';
  }
}
