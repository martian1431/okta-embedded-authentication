import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [AngularMaterialModule, CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
