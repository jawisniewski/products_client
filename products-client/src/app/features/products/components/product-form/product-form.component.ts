import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  @Output() submitted = new EventEmitter<Product>();
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0.01, [Validators.required, Validators.min(0.01)]],
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      this.submitted.emit(this.productForm.value as Product);
      this.productForm.reset();
    }
  }
}
