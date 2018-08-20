import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-editor',
  templateUrl: './member-editor.component.html',
  styleUrls: ['./member-editor.component.css']
})
export class MemberEditorComponent implements OnInit {
  pageTitle = 'Family Member Editor';
  member = 'JW';

  constructor() { }

  ngOnInit() {
  }

}
