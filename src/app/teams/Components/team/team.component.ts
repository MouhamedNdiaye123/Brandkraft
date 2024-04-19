import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: Array<any> =[
    {
      team_img: 'assets/images/team1.png',
      team_name: 'Kingsley Chucks HR Manager',
      team_btn: 'btn'
    },
    {
      team_img: 'assets/images/team2.png',
      team_name: 'Kingsley Chucks HR Manager',
      team_btn: 'btn'
    },
    {
      team_img: 'assets/images/team3.png',
      team_name: 'Kingsley Chucks HR Manager',
      team_btn: 'btn'
    },
    {
      team_img: 'assets/images/team4.png',
      team_name: 'Kingsley Chucks HR Manager',
      team_btn: 'btn'
    },
  ];
}
