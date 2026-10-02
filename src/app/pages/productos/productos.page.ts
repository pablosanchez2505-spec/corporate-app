import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/angular';
import { ProductsService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class ProductosPage implements OnInit {
  products: any = [];

  constructor(
    private productService: ProductsService
  ){}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
  }
}