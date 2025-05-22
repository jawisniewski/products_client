import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'form-errors',
  standalone: false,
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.scss',
})
export class FormErrorsComponent {
  @Input() control!: AbstractControl | null;
}
