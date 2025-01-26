import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent, routes } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, { 
  ...appConfig,
  providers: [ provideRouter(routes) ]
})
  .catch((err) => console.error(err));
