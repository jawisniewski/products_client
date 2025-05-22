import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { TranslateModule } from '@ngx-translate/core';
import { ApiAlertComponent } from './components/api-alert/api-alert.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FormErrorsComponent, ApiAlertComponent, LoaderComponent],
  imports: [CommonModule, TranslateModule],
  exports: [FormErrorsComponent, ApiAlertComponent, LoaderComponent],
})
export class SharedModule {}
