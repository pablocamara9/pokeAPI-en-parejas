import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { provideHttpClient } from '@angular/common/http';
import { MoveListComponent } from './components/move-list/move-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';
import { MoveItemComponent } from './components/move-item/move-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponentComponent,
    MoveListComponent,
    PageNotFoundComponent,
    MoveDetailComponent,
    MoveItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
