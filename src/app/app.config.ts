import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideNativeDateAdapter(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-7e36d", "appId": "1:494066120769:web:98278f625c1fb96fdb2ec0", "storageBucket": "simple-crm-7e36d.appspot.com", "apiKey": "AIzaSyA05VTanfEh_J1gxWY8O3DaBeiJj6M-yJg", "authDomain": "simple-crm-7e36d.firebaseapp.com", "messagingSenderId": "494066120769" }))), importProvidersFrom(provideFirestore(() => getFirestore()))

  ]
};
