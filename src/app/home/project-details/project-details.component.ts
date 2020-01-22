import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetailsArray: any;
  prj:any
  constructor(private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.prj = this.route.snapshot.paramMap.get('id');

    this.projectDetailsArray = [
      {  pname:"p1", pstatus:"Completed", pduration:"3 months", ptechnology:"Angular", pdetails:"SoftwareProject"},
      {  pname:"p2", pstatus:"Completed", pduration:"6 months", ptechnology:"Node",  pdetails:"SoftwareProject"},
      {  pname:"p3", pstatus:"InProgress", pduration:"9 months", ptechnology:"Python",  pdetails:"SoftwareProject" },
      {  pname:"p4", pstatus:"InProgress", pduration:"12 months", ptechnology:"Java", pdetails:"SoftwareProject" }
    ];
  }
  navigateToProject(pname) {
    this.router.navigate([`/mainpage/projects`]);

    this.projectDetailsArray.forEach(ele => {
    })
   
  }

}
