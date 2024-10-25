import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MoveDetailComponent } from './components/move-detail/move-detail.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [

  {path: 'pokemon', component: PokemonListComponent},
  {path: 'move', component: MoveListComponent},
  {path:'move-detail/:id', component: MoveDetailComponent},
  {path: 'pokemon-detail/:id', component: PokemonDetailComponent},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
