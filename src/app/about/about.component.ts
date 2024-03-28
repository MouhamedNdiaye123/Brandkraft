import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  img1 = "/assets/images/about1.png"
  img2 = "/assets/images/about2.png"
  aboutPar = 'co-founder brandkraft'

}
