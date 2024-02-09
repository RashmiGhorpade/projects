import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
