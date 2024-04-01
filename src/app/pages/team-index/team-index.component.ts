import { Component } from '@angular/core';
import { ExperienceComponent } from '../../teams/Components/experience/experience.component';
import { ExperienceItemComponent } from '../../teams/Components/experience-item/experience-item.component';

@Component({
  selector: 'app-team-index',
  standalone: true,
  imports: [ExperienceComponent, ExperienceItemComponent],
  templateUrl: './team-index.component.html',
  styleUrl: './team-index.component.css'
})
export class TeamIndexComponent {

}
