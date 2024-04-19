import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Array<any> =[
    {
      imgUrl: '/assets/images/Vector.png', 
      nom: 'facebbok', 
      profes: 'Mobile Product Designe',
      date: 'feb2024 present',
      paragraphe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit massa massa vestibulum pretium turpis sit cursus dis vitae commodo',
    },
    {
      imgUrl: '/assets/images/Vector.png', 
      nom: 'facebbok', 
      profes: 'Mobile Product Designe',
      date: 'feb2024 present',
      paragraphe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit massa massa vestibulum pretium turpis sit cursus dis vitae commodo',
    },
    {
      imgUrl: '/assets/images/Vector.png', 
      nom: 'twitter', 
      profes: 'UI/UX Designer',
      date: 'may2020 jan2022t',
      paragraphe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit massa massa vestibulum pretium turpis sit cursus dis vitae commodo',
    },
    {
      imgUrl: '/assets/images/Vector.png', 
      nom: 'youtube', 
      profes: 'VP of Design',
      date: 'july2018 jan2019',
      paragraphe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit massa massa vestibulum pretium turpis sit cursus dis vitae commodo',
    },
    {
      imgUrl: '/assets/images/Vector.png', 
      nom: 'instagram', 
      profes: 'Head of Product Design',
      date: 'feb2024 present',
      paragraphe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit massa massa vestibulum pretium turpis sit cursus dis vitae commodo',
    },
  ];
}
