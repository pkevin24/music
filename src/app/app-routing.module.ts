import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { FavComponent } from './fav/fav.component';
import { FavoneComponent } from './favone/favone.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'songs',component:AllsongsComponent},{path:'explore',component:GenreComponent},{path:'favourite',component:FavoneComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
