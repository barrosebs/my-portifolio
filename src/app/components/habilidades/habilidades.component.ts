import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  frontendSkills: Skill[] = [
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'TypeScript', level: 80, icon: 'fab fa-js-square' },
    { name: 'Angular', level: 85, icon: 'fab fa-angular' },
    { name: 'Vue.js', level: 70, icon: 'fab fa-vuejs' },
    { name: 'React', level: 65, icon: 'fab fa-react' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
    { name: 'Sass/SCSS', level: 80, icon: 'fab fa-sass' },
    { name: 'Tailwind CSS', level: 75, icon: 'fas fa-palette' }
  ];

  backendSkills: Skill[] = [
    { name: 'C# .NET Core', level: 90, icon: 'fas fa-code' },
    { name: 'C# .NET Framework', level: 85, icon: 'fas fa-code' },
    { name: 'ASP.NET MVC', level: 80, icon: 'fas fa-server' },
    { name: 'Web API', level: 85, icon: 'fas fa-plug' },
    { name: 'Entity Framework', level: 80, icon: 'fas fa-database' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
    { name: 'RESTful APIs', level: 90, icon: 'fas fa-exchange-alt' },
    { name: 'Microservices', level: 75, icon: 'fas fa-cubes' }
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL Server', level: 85, icon: 'fas fa-database' },
    { name: 'PostgreSQL', level: 80, icon: 'fas fa-database' },
    { name: 'Oracle PL/SQL', level: 60, icon: 'fas fa-database' },
    { name: 'MongoDB', level: 65, icon: 'fas fa-leaf' },
    { name: 'Redis', level: 70, icon: 'fas fa-memory' },
    { name: 'MySQL', level: 75, icon: 'fas fa-database' }
  ];

  cloudSkills: Skill[] = [
    { name: 'Azure DevOps', level: 80, icon: 'fab fa-microsoft' },
    { name: 'Azure Cloud', level: 75, icon: 'fab fa-microsoft' },
    { name: 'AWS', level: 65, icon: 'fab fa-aws' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker' },
    { name: 'Kubernetes', level: 60, icon: 'fas fa-dharmachakra' },
    { name: 'CI/CD Pipelines', level: 75, icon: 'fas fa-code-branch' },
    { name: 'Git/GitHub', level: 90, icon: 'fab fa-git-alt' },
    { name: 'Jenkins', level: 65, icon: 'fas fa-tools' }
  ];

  toolsSkills: Skill[] = [
    { name: 'Visual Studio', level: 90, icon: 'fas fa-code' },
    { name: 'VS Code', level: 95, icon: 'fas fa-code' },
    { name: 'Postman', level: 85, icon: 'fas fa-paper-plane' },
    { name: 'Swagger', level: 80, icon: 'fas fa-book' },
    { name: 'N8N Automations', level: 75, icon: 'fas fa-robot' },
    { name: 'Scrum/Agile', level: 85, icon: 'fas fa-users' },
    { name: 'Jira', level: 80, icon: 'fab fa-atlassian' },
    { name: 'Figma', level: 70, icon: 'fab fa-figma' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Animate skill bars on component load
    this.animateSkillBars();
  }

  private animateSkillBars(): void {
    // Add staggered animation delays for skill cards
    setTimeout(() => {
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 100);
      });
    }, 500);
  }
}
