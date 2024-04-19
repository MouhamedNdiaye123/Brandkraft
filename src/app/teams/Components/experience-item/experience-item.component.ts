import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/Components/button/button.component';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() imageSrc!: string;
  @Input() full_name!: string;
  @Input() description!: string;
  @Input() paragraphe!: string;

  experience_item: Array<any> = [
    {
      member_img1: '/assets/images/about1.png',
      member_name1: 'Emmanuel Olubusade',
      member_prof1: 'Co-Founder Brandraft',
      member_desc1: 'Lorem ipsum dolor sit amet, consectetur non id adipiscing elit quam malesuada fringilla gravida risus purus facilisis.',
    },
    {
      member_img2: '/assets/images/about2.png',
      member_name2: 'Miracle <br> Udoh',
      member_prof2: 'Co-Founder Brandraft',
      member_desc2: 'Lorem ipsum dolor sit amet, consectetur non id adipiscing elit quam malesuada fringilla gravida risus purus facilisis.',
    },
  ];
}
