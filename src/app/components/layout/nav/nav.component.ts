import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() hidden: boolean = false;
  
  // Navigation state
  item = 'home';
  isScrolled = false;
  mobileMenuOpen = false;
  
  // Scroll threshold for navbar background
  private scrollThreshold = 100;

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > this.scrollThreshold;
    this.updateActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }

  Selected(section: string): void {
    this.item = section;
    this.closeMobileMenu();
    
    // Smooth scroll to section
    const element = document.getElementById(section === 'home' ? 'inicio' : section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  private updateActiveSection(): void {
    const sections = ['inicio', 'sobre', 'habilidades', 'curriculo', 'portfolio', 'contato'];
    const scrollPosition = window.pageYOffset + 100; // Offset for navbar height
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.item = sectionId === 'inicio' ? 'home' : sectionId;
          break;
        }
      }
    }
  }
}
