import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup}  from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetailsArray: any = [
    {  pname:"p1", pstatus:"Completed", pduration:"3 months", ptechnology:"Angular", ptype:"SoftwareProject", pdesc:"The name of the hjjs jsadf dfhj"},
    {  pname:"p2", pstatus:"Completed", pduration:"6 months", ptechnology:"Node",  ptype:"SoftwareProject", pdesc:"The name of the hjjs jsadf dfhj"},
    {  pname:"p3", pstatus:"InProgress", pduration:"9 months", ptechnology:"Python",  ptype:"SoftwareProject", pdesc:"The name of the hjjs jsadf dfhj" },
    {  pname:"p4", pstatus:"InProgress", pduration:"12 months", ptechnology:"Java", ptype:"SoftwareProject", pdesc:"The name of the hjjs jsadf dfhj" }
  ];
  prj:any
  editForm: FormGroup;
  showSavebtn: boolean;
  constructor(private router:Router,private route : ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      duration: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(3), spaceValidator]],
      description: ['', [Validators.required, Validators.minLength(4), spaceValidator]],
    });
   

    this.prj = this.route.snapshot.paramMap.get('id');
    this.projectDetailsArray = this.projectDetailsArray.filter(ele => {
      console.log('ele.pname === this.prj',ele.pname === this.prj);
      if(ele.pname === this.prj){
        return ele;
      }

    }
    );   
    console.log(' this.projectDetailsArray', this.projectDetailsArray)
  }

  // navigateToProject(pname) {
  //   this.router.navigate([`/mainpage/projects`]);
  //   this.projectDetailsArray.forEach(ele => {
  //   })   
  // }

  get f() { return this.editForm.controls;}  

  editProject(pduration, pdesc , index){
    this.showSavebtn = true;
    this.editForm.setValue({ duration: pduration, description: pdesc });
  }

  saveProject(i){
    this.showSavebtn = false;
    this.projectDetailsArray[i].pduration = this.editForm.value.duration;
    this.projectDetailsArray[i].pdesc = this.editForm.value.description;
  }

  cancelProject(index) {
    this.showSavebtn = false;
  }
  deleteProject() {

  }

}

function spaceValidator(control: AbstractControl): { [key: string]: any } | null {
  const targetValue = control.value;
  // .replace(/  +/g, ' ')
  if (targetValue.trim() === '') {
    return { validInput: true };
  }
  return null;
}
