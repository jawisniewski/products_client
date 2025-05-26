import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-api-alert',
  templateUrl: './api-alert.component.html',
  styleUrl: './api-alert.component.scss',
  imports: [TranslatePipe],
})
export class ApiAlertComponent {
  @Input() errorKey!: string | null;
}
