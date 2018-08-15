import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { MemberEditorComponent } from './member-editor/member-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FamilyRoutingModule
  ],
  declarations: [MemberEditorComponent]
})
export class FamilyModule { }
