import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.scss',
  imports: [TranslatePipe],
})
export class FormErrorsComponent {
  errorMessages: { [key: string]: { translation: string } } = {
    required: { translation: 'REQUIRED_ERROR' },
    minlength: { translation: 'MIN_LENGTH_ERROR' },
    maxlength: { translation: 'MAX_LENGTH_ERROR' },
    min: { translation: 'MIN_VALUE_ERROR' },
    max: { translation: 'MAX_VALUE_ERROR' },
  };
  @Input() control!: AbstractControl | null;
  get errorKeys(): string[] {
    return this.control?.errors ? Object.keys(this.control.errors) : [];
  }
}
