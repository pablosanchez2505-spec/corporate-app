import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Product[] {
    return [
      { id: 1, nombre: 'Consultoría Cloud', unidades: 10, precio: 300, vendedor: 'Ana Gómez' },
      { id: 2, nombre: 'Desarrollo de App', unidades: 5, precio: 900, vendedor: 'Carlos Ruiz' },
      { id: 3, nombre: 'Auditoría Web', unidades: 8, precio: 500, vendedor: 'Lucía Fernández' }
    ];
  }
}