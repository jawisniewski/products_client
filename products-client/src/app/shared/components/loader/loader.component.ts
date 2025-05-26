import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrl: './loader.component.scss',
    imports: [NgIf],
})
export class LoaderComponent {
  @Input() isLoading: boolean = false;
}
