import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonButton,
  IonItem,
  IonLabel
} from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  standalone: true,
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonItem,
    IonLabel
  ]
})
export class NosotrosPage implements OnInit {
  latitude: number | null = null;
  longitude: number | null = null;
  distance: number | null = null;

  // Coordenadas fijas de la empresa (ejemplo: Madrid)
  companyLat: number = 40.4168;
  companyLon: number = -3.7038;

  constructor() {}

  ngOnInit() {}

  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;

      // Calcular la distancia usando la fórmula Haversine
      this.distance = this.calcularHaversine(
        this.latitude,
        this.longitude,
        this.companyLat,
        this.companyLon
      );
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  // Implementación de la fórmula Haversine (devuelve la distancia en kilómetros)
  calcularHaversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = this.degToRad(lat2 - lat1);
    const dLon = this.degToRad(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;
    
    return Number(distancia.toFixed(2)); // Redondea a 2 decimales
  }

  degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}