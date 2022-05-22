import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { FavComponent } from './fav/fav.component';
import { FavoneComponent } from './favone/favone.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';

<<<<<<< HEAD
const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'songs',component:AllsongsComponent},{path:'explore',component:GenreComponent},{path:'favourite',component:FavoneComponent}];
=======
const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'songs',component:AllsongsComponent},{path:'explore',component:GenreComponent},{path:'song',component:SongComponent}];
>>>>>>> 3c9d273466e6a8545867928975ee404db620626a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
