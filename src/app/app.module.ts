import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { provideHttpClient } from '@angular/common/http';
import { PokeballListComponent } from './components/pokeball-list/pokeball-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponentComponent,
    PokeballListComponent
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
