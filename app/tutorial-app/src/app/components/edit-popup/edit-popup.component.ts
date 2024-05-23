import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../types';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Input() header!: string;
  @Input() product: Product = {
    name: '',
    price: '',
    image: '',
    rating: 0,
  };

  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.cancel.emit();
    this.display = false;
    console.log(this.display);
  }
}
