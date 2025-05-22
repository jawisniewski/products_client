import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-alert',
  standalone: false,
  templateUrl: './api-alert.component.html',
  styleUrl: './api-alert.component.scss',
})
export class ApiAlertComponent {
  @Input() errorKey!: string | null;
}
