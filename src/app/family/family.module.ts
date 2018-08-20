import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { MemberEditorComponent } from './member-editor/member-editor.component';
import { FamilyNamesComponent } from './family-names/family-names.component';
import { FamilyComponent } from './family/family.component';
import { FamilyMembersComponent } from './family-members/family-members.component';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule
  ],
  declarations: [MemberEditorComponent, FamilyNamesComponent, FamilyComponent, FamilyMembersComponent]
})
export class FamilyModule { }
