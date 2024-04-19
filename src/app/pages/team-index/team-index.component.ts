import { Component } from '@angular/core';
import { ExperienceComponent } from '../../teams/Components/experience/experience.component';
import { TeamComponent } from '../../teams/Components/team/team.component';

@Component({
  selector: 'app-team-index',
  standalone: true,
  imports: [ExperienceComponent, TeamComponent],
  templateUrl: './team-index.component.html',
  styleUrl: './team-index.component.css'
})
export class TeamIndexComponent {

}
