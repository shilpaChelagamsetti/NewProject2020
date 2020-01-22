import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  projectsArray; any;
  constructor() { }

  ngOnInit() {
    this.projectsArray = [
      {  pname:"p1"  },
      {  pname:"p2"  },
      {  pname:"p3"  },
      {  pname:"p4"  }
    ];
  }

}
