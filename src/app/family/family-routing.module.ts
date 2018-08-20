import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { FamilyNamesComponent } from './family-names/family-names.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { MemberEditorComponent } from './member-editor/member-editor.component';

const familyRoutes: Routes = [
  { path: 'family', component: FamilyComponent },
  { path: 'family-members', component: FamilyMembersComponent },
//  { path: 'family-members/:id', component: FamilyMembersComponent },
  { path: 'family-names', component: FamilyNamesComponent },
  { path: 'member-editor', component: MemberEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(familyRoutes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
