import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'songs',component:AllsongsComponent},{path:'song',component:SongComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
