import { Component } from '@angular/core';
import { IconComponent } from '../../shared/Components/icon/icon.component';
import { ButtonComponent } from '../../shared/Components/button/button.component';
import { LogoComponent } from '../../shared/Components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent, ButtonComponent, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
