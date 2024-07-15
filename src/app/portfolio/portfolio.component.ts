import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Rack Management System (Full stack developer)',
      summary: `Rack Management is an online application designed to manage shelf racks available at 
      your workplace. It helps to organize items and products and thus reduce the return time 
      from the racks to serve the needy in a better way.`,
      description: `In this project, Developed Restful API's, Drag-and-drop interface for components, Search functionality to locate products, Developed dynamic menu option where user can rename menus based on his requirements, Integrated notification alert based on number of reminders and time interval for reminder to send alert notification for users.`,
      projectLink: 'https://github.com/Shashi0620/RMS-nestjs',
      tags: [Tag.TYPESCRIPT,Tag.NODE_JS, Tag.NEST_JS, Tag.RESTAPI,Tag.SEQUELIZE, Tag.POSTGRESQL, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.CYPRESS, Tag.NgINX],
      pictures: ["../../assets/rms1.png", "../../assets/rms2.png", "../../assets/rms3.png", "../../assets/rms4.png", "../../assets/rms5.png", "../../assets/rms6.png",  "../../assets/rms7.png"]
    },
    {
      id: 2,
      name: 'Product Management System (Front-end developer)',
      summary: `Can-browser is an advanced product information management (PIM) system for the 
      CAN industry. It Manages, compares, shares and updates thousands of products. It is 
      deployed on AWS server along with elastic search feature as its advanced search 
      engine.
      `,
      description: `Contributed to the development of Product, a web-based Product Management 
      System aimed at improving product lifecycle management and collaboration within 
      teams ,Chinese language option for UI, where user can use application in Chinese 
      language, Implemented nested forms, Angular router, Multi-select dropdown, multiple file 
      select option, Data tables etc…, Handled deployment process in tomcat server.`,
      projectLink: '',
      tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.HIBERNATE, Tag.MySQL, Tag.TYPESCRIPT, Tag.ANGULAR, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/cb1.jpeg", "../../assets/cb2.jpeg", "../../assets/cb3.jpeg", "../../assets/cb4.jpeg", "../../assets/cb5.jpeg","../../assets/cb6.jpeg","../../assets/cb7.jpeg","../../assets/cb8.jpeg"]
    }

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
