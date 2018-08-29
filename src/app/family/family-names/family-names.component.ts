import { Component, OnInit } from '@angular/core';

import { SURNAMES  } from '../mock-surnames';

@Component({
  selector: 'app-family-names',
  templateUrl: './family-names.component.html',
  styleUrls: ['./family-names.component.css']
})
export class FamilyNamesComponent implements OnInit {
  surnames = SURNAMES;

  constructor() { }

  ngOnInit() {
  }

}
