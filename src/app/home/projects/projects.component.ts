import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsArray: any;
  showProjDetails: boolean;
  prj: any;
  constructor(private router:Router, private route : ActivatedRoute) {
     }

     handleProjects(index) {
      this.projectsArray[index].showProjDetails = !this.projectsArray[index].showProjDetails;
    };
  
    displayProjDetails(index) {
      let pname = this.projectsArray[index].pname;
      this.router.navigate([`/mainpage/projectDetails/${pname}`]);
    }

  ngOnInit() {

    this.projectsArray = [
      {  pname:"p1", pstatus:"Completed", pduration:"3 months", ptechnology:"Angular", showProjDetails: false, pdetails:"Details"},
      {  pname:"p2", pstatus:"Completed", pduration:"6 months", ptechnology:"Node", showProjDetails: false, pdetails:"Details"},
      {  pname:"p3", pstatus:"InProgress", pduration:"9 months", ptechnology:"Python", showProjDetails: false, pdetails:"Details" },
      {  pname:"p4", pstatus:"InProgress", pduration:"12 months", ptechnology:"Java",showProjDetails: false, pdetails:"Details" }
    ];
  }



}
