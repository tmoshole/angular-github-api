import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReposComponent } from './repos/repos.component';
import { GistsComponent } from './gists/gists.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [ 
  { path: '', component: UserListComponent },
  { path: ':username', component: UserDetailsComponent },
  { path: ':username/repos', component: ReposComponent },
  { path: ':username/gists', component: GistsComponent },
  { path: ':username/followers', component: FollowersComponent },
  { path: ':username/following', component: FollowingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
