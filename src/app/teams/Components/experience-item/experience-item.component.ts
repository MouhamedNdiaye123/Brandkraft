import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/Components/button/button.component';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() content: any;

  experience: Array<any> []= [
    
  ];
}
