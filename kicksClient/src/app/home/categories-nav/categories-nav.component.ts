import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {

  categories = ['Design & Tech', 'Music', 'Publishing','Film','Food & Craft', 'Games', 'Arts', 'Comics & Illustration'];

  statuses = ['New','Getting Started', 'Almost There', 'Finished'];

  selected = this.categories[0];

  selectedStatus = this.statuses[0];

  constructor() { }

  updateSelected(field) {
    this.selected = field;

  }

  updateSelectedStatus(status) {
    this.selectedStatus = status;

  }

  ngOnInit() {
  }

}
