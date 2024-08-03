import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconEnum } from '@enums';
import { AuthService } from '@services';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [MatIconModule, IconComponent],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() link: string;
  #matIconRegistry = inject(MatIconRegistry);
  #domSanitizer = inject(DomSanitizer);
  IconEnum = IconEnum;

  constructor() {
    this.#matIconRegistry.addSvgIcon(
      IconEnum.Avatar,
      this.#domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/pics/avatar.svg'
      )
    );
  }
}
