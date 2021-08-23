import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {ExpertComponent} from "./expert/expert.component";
import {BecomeExpertComponent} from "./form/become-expert/become-expert.component";
import {SearchComponent} from "./search/search.component";
import {FavouriteComponent} from "./favourite/favourite.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:"", component:HomeComponentComponent},
  {path:'expert/:id', component: ExpertComponent},
  {path:'becomeExpert', component: BecomeExpertComponent},
  {path:'search', component: SearchComponent},
  {path:'favourite', component:FavouriteComponent},
  {path:"**", component:NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
