import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { CroppingComponent } from './cropping/cropping.component';
import { DocumentScannerComponent } from './document-scanner/document-scanner.component';
import { HomeComponent } from './home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageResultsComponent } from './image-results/image-results.component';
import { MrzScannerComponent } from './mrz-scanner/mrz-scanner.component';
import { TextDataScannerComponent } from './text-data-scanner/text-data-scanner.component';
import { ToolbarComponent } from './common/components/toolbar/toolbar.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentScannerComponent,
    ImageResultsComponent,
    ImageDetailsComponent,
    CroppingComponent,
    BarcodeScannerComponent,
    MrzScannerComponent,
    TextDataScannerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatGridListModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
