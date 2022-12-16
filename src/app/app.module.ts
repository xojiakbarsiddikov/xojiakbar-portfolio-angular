import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PagesComponent } from './components/pages/pages.component';
import { ComponentsMediaComponent } from './components.media/components.media.component';
import { SettingsComponent } from './components/settings/settings.component';
import {RouterLinkWithHref} from "@angular/router";
import { MediaComponent } from './components/media/media.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { HeaderComponent } from './components/header/header.component';
import {CdkMenuModule} from "@angular/cdk/menu";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    ComponentsMediaComponent,
    SettingsComponent,
    MediaComponent,
    SublevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterLinkWithHref,
    AppRoutingModule,
    CdkMenuModule,
    OverlayModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
