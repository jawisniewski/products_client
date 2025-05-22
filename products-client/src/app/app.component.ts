import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'products-client';
}
