import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { SuiModalService, SuiModalModule } from '@giomamaladze/ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import config from './app.config';
import { Router, Routes } from '@angular/router';
import OktaAuth from '@okta/okta-auth-js';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfirmModal } from './modal/confirm.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useFactory: () => {
        const oktaAuth = new OktaAuth(config.oidc);
        return {
          oktaAuth,
          onAuthRequired: (oktaAuth: OktaAuth, injector: Injector) => {
            const triggerLogin = () => {
              // Redirect the user to your custom login page
              const router = injector.get(Router);
              router.navigate(['/login']);
            };
            if (
              !oktaAuth.authStateManager.getPreviousAuthState()?.isAuthenticated
            ) {
              // App initialization stage
              console.log('Test 1');
              triggerLogin();
            } else {
              console.log('Test 2');
              // Ask the user to trigger the login process during token autoRenew process
              const modalService = injector.get(SuiModalService);
              modalService
                .open(
                  new ConfirmModal(
                    'Do you want to re-authenticate?',
                    'Auth required',
                    'Yes',
                    'No'
                  )
                )
                .onApprove(triggerLogin)
                .onDeny(() => {});
            }
          },
        };
      },
    },
    { provide: APP_BASE_HREF, useValue: environment.appBaseHref },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
