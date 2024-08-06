import { Component } from '@angular/core';
import { CoursesEnum, IconEnum } from '@enums';
import { IconComponent } from 'app/components';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  CoursesEnum = CoursesEnum;
  IconEnum = IconEnum;
}
