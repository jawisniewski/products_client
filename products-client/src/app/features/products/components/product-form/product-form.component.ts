import { Component, EventEmitter, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormErrorsComponent } from '../../../../shared/components/form-errors/form-errors.component';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  imports: [ReactiveFormsModule, FormErrorsComponent, TranslatePipe],
})
export class ProductFormComponent {
  @Output() submitted = new EventEmitter<ProductModel>();
  productForm = this.formBuilder.group({
    code: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    price: [
      0.01,
      [Validators.required, Validators.min(0.01), Validators.max(999999)],
    ],
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmit() {
    if (this.productForm.valid) {
      this.submitted.emit(this.productForm.value as ProductModel);
      this.productForm.reset();
    }
  }
}
