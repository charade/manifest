import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconEnum } from '@enums';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string;
  @Input() icon: IconEnum;
  @Input() iconPosition: 'before' | 'after';

  @Output() onClick = new EventEmitter<Event>();
}
