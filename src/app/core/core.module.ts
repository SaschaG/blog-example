import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MobileNavbarComponent } from './layout/mobile-navbar/mobile-navbar.component';
import { DesktopNavbarComponent } from './layout/desktop-navbar/desktop-navbar.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MobileNavbarComponent,
    DesktopNavbarComponent,
    StartPageComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    MobileNavbarComponent,
    DesktopNavbarComponent,
    StartPageComponent,
  ],
})
export class CoreModule {}
