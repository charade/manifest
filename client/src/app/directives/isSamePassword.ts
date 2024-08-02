import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[isSamePassword]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsSamePasswordDirective,
      multi: true,
    },
  ],
})
export class IsSamePasswordDirective implements Validator {
  @Input({ required: true }) isSamePassword: string;

  validate(control: AbstractControl): ValidationErrors {
    return this.isSamePassword === control.value
      ? null
      : { isSamePassword: 'false' };
  }
}
