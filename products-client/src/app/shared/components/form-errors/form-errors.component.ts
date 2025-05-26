import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'form-errors',
    templateUrl: './form-errors.component.html',
    styleUrl: './form-errors.component.scss',
    imports: [NgIf, TranslatePipe],
})
export class FormErrorsComponent {
  @Input() control!: AbstractControl | null;
}
