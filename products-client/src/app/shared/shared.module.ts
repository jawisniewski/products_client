import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FormErrorsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [FormErrorsComponent],
})
export class SharedModule {}
