import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `<fa-icon [icon]="IconEnum.value.get(iconName)" />`,
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) iconName: IconEnum;

  IconEnum = IconEnum;
}
