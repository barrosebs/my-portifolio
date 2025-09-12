import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress';
  features?: string[];
}

interface Filter {
  id: string;
  name: string;
  icon: string;
}

interface Particle {
  x: number;
  y: number;
  delay: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedFilter = 'all';
  selectedProject: Project | null = null;
  particles: Particle[] = [];

  filters: Filter[] = [
    { id: 'all', name: 'Todos', icon: 'fas fa-th' },
    { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
    { id: 'mobile', name: 'Mobile', icon: 'fas fa-mobile-alt' },
    { id: 'api', name: 'APIs', icon: 'fas fa-server' },
    { id: 'frontend', name: 'Frontend', icon: 'fab fa-html5' },
    { id: 'fullstack', name: 'Full Stack', icon: 'fas fa-layer-group' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema Asteba',
      shortDescription: 'Sistema completo de gestão empresarial com dashboard interativo',
      fullDescription: 'Sistema completo de gestão empresarial desenvolvido com Angular e .NET Core, incluindo dashboard interativo, relatórios em tempo real e integração com APIs externas.',
      category: 'fullstack',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Bootstrap'],
      image: 'assets/images/png/asteba.jpg',
      liveUrl: 'https://asteba.com.br',
      githubUrl: 'https://github.com/barrosebs/asteba',
      status: 'completed',
      features: [
        'Dashboard interativo com gráficos em tempo real',
        'Sistema de autenticação e autorização',
        'Relatórios personalizáveis',
        'Integração com APIs de terceiros',
        'Interface responsiva'
      ]
    },
    {
      id: 2,
      title: 'SmartFit Challenge',
      shortDescription: 'Landing page responsiva para academia com busca de unidades',
      fullDescription: 'Projeto desenvolvido como desafio técnico, criando uma landing page moderna e responsiva para a SmartFit com sistema de busca de unidades por localização.',
      category: 'frontend',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      image: 'assets/images/png/desafio-smartFit.jpg',
      liveUrl: 'https://smartfit-challenge.vercel.app',
      githubUrl: 'https://github.com/barrosebs/smartfit-challenge',
      status: 'completed',
      features: [
        'Design responsivo e moderno',
        'Busca de unidades por CEP',
        'Filtros por horário de funcionamento',
        'Integração com API de localização',
        'Animações suaves'
      ]
    },
    {
      id: 3,
      title: 'Sistema de Chat Real-time',
      shortDescription: 'Aplicação de chat em tempo real com SignalR',
      fullDescription: 'Sistema de chat em tempo real desenvolvido com Angular e SignalR, permitindo comunicação instantânea entre usuários com notificações push.',
      category: 'web',
      technologies: ['Angular', 'SignalR', '.NET Core', 'WebSockets'],
      image: 'assets/images/png/SignalR.jpg',
      githubUrl: 'https://github.com/barrosebs/chat-signalr',
      status: 'completed',
      features: [
        'Mensagens em tempo real',
        'Notificações push',
        'Salas de chat privadas',
        'Histórico de mensagens',
        'Status online/offline'
      ]
    },
    {
      id: 4,
      title: 'API de E-commerce',
      shortDescription: 'API RESTful completa para sistema de e-commerce',
      fullDescription: 'API robusta desenvolvida em .NET Core para sistema de e-commerce, incluindo autenticação JWT, processamento de pagamentos e integração com serviços externos.',
      category: 'api',
      technologies: ['.NET Core', 'Entity Framework', 'JWT', 'Swagger'],
      image: 'assets/images/png/Screenshot_2.jpg',
      githubUrl: 'https://github.com/barrosebs/ecommerce-api',
      status: 'in-progress',
      features: [
        'Autenticação JWT',
        'CRUD completo de produtos',
        'Sistema de carrinho',
        'Processamento de pagamentos',
        'Documentação Swagger'
      ]
    },
    {
      id: 5,
      title: 'App Mobile Delivery',
      shortDescription: 'Aplicativo mobile para delivery de comida',
      fullDescription: 'Aplicativo mobile desenvolvido em React Native para delivery de comida, com geolocalização, pagamentos integrados e acompanhamento de pedidos em tempo real.',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Maps API'],
      image: 'assets/images/png/asteba.jpg',
      status: 'in-progress',
      features: [
        'Geolocalização em tempo real',
        'Pagamentos integrados',
        'Acompanhamento de pedidos',
        'Push notifications',
        'Interface intuitiva'
      ]
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      shortDescription: 'Dashboard de analytics com visualizações interativas',
      fullDescription: 'Dashboard completo de analytics desenvolvido com Angular e D3.js, oferecendo visualizações interativas de dados e relatórios personalizáveis.',
      category: 'web',
      technologies: ['Angular', 'D3.js', 'Chart.js', 'Material Design'],
      image: 'assets/images/png/Screenshot_2.jpg',
      liveUrl: 'https://analytics-dashboard.vercel.app',
      githubUrl: 'https://github.com/barrosebs/analytics-dashboard',
      status: 'completed',
      features: [
        'Gráficos interativos',
        'Filtros avançados',
        'Exportação de relatórios',
        'Atualizações em tempo real',
        'Interface responsiva'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.generateParticles();
  }

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedFilter);
  }

  setFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  getProjectCount(filterId: string): number {
    if (filterId === 'all') {
      return this.projects.length;
    }
    return this.projects.filter(project => project.category === filterId).length;
  }

  openProject(url: string | undefined, event: Event): void {
    event.stopPropagation();
    if (url) {
      window.open(url, '_blank');
    }
  }

  openProjectModal(project: Project, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  private generateParticles(): void {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6
      });
    }
  }
}
