import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/models/user.model';
import { CountriesService } from 'src/app/services/countries.service';
import { UsersService } from 'src/app/services/user.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-jobseeker-profile',
  templateUrl: './jobseeker-profile.component.html',
  styleUrls: ['./jobseeker-profile.component.css']
})
export class JobseekerProfileComponent implements OnInit {


  countries = this.countriesService.countries;
  country: string = '';
  selectedValue = null;
  avatarUrl?: string;
  user!: User;
  profileImage: any;
  anyAny: any[] = [];
  userExperience: any = [];
  currentUser!: User;

  

  constructor(
    private usersService: UsersService, 
    private msg: NzMessageService, 
    private countriesService: CountriesService,
    private http: HttpClient
  ) { }

  initUser(){
    this.usersService.init();
    this.usersService.Account.subscribe((user:any)=>{this.user=user});
    this.usersService.users$.subscribe((users: any) => {
      this.currentUser = users.filter((user: any) => {
        return user._id = user._id;
      })
    })
  }

  ngOnInit(): void {
    this.initUser();
  }

  // Messages

  createMessage(type: string, message:string): void {
    this.msg.create(type, message);
  }


  // Basic Information Modal 

  basicIsVisible = false;
  basicIsConfirmLoading = false;

  editBasic(): void {
    this.basicIsVisible = true;
  }

  basicModal(): void {
    this.basicIsVisible = true;
  }

  basicOk(): void {
    this.basicIsConfirmLoading = true;
    setTimeout(() => {
      this.basicIsVisible = false;
      this.basicIsConfirmLoading = false;
    }, 1000);
  }

  basicCancel(): void {
    this.basicIsVisible = false;
  }

  onEditBasic(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    const basicUpdate: any = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      country: form.value.country
    }
    const userID = this.user._id;
    console.log(basicUpdate)
    this.usersService.updateUser( userID! , basicUpdate)
    .subscribe((result: any) => {
      console.log(result);
      this.createMessage('success', 'Your basic information has been updated successfully');
    }, (err: HttpErrorResponse) => {
      console.log(err.error.message);
      this.createMessage('error', err.error.message);
    });
    this.initUser();
    this.basicIsVisible = false;
  }


  // Experience Modal 

  indexOfElement: number = 0;

  experienceIsVisible = false;
  experienceIsConfirmLoading = false;

  addExperience(): void {
    this.experienceIsVisible = true;
  }

  experienceModal(): void {
    this.experienceIsVisible = true;
  }

  experienceOk(): void {
    this.experienceIsConfirmLoading = true;
    setTimeout(() => {
      this.experienceIsVisible = false;
      this.experienceIsConfirmLoading = false;
    }, 1000);
  }

  experienceCancel(): void {
    this.experienceIsVisible = false;
  }

  editExperienceIsVisible = false;
  editExperienceIsConfirmLoading = false;

  editExperience(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    let currentExperience =  this.user.experience[indexOfElement];
    console.log(currentExperience);
    this.editExperienceIsVisible = true;
  }

  editExperienceModal(): void {
    this.editExperienceIsVisible = true;
  }

  editExperienceOk(): void {
    this.editExperienceIsConfirmLoading = true;
    setTimeout(() => {
      this.editExperienceIsVisible = false;
      this.editExperienceIsConfirmLoading = false;
    }, 1000);
  }

  editExperienceCancel(): void {
    this.editExperienceIsVisible = false;
  }

  deleteExperienceIsVisible = false;
  deleteExperienceIsConfirmLoading = false;
  selectedExperience: any;
  selectedEducation: any;
  selectedSkill: any;


  deleteExperience(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    this.selectedExperience = this.user.experience[indexOfElement];
    this.deleteExperienceIsVisible = true;
  }

  deleteExperienceModal(): void {
    this.deleteExperienceIsVisible = true;
  }

  deleteExperienceOk(): void {
    this.deleteExperienceIsConfirmLoading = true;
    setTimeout(() => {
      this.deleteExperienceIsVisible = false;
      this.deleteExperienceIsConfirmLoading = false;
    }, 1000);
  }

  deleteExperienceCancel(): void {
    this.deleteExperienceIsVisible = false;
  }

  onAddExperience(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const experienceData: any = {
      title: form.value.title,
      description: form.value.description,
      company: form.value.company,
      startYear: form.value.startYear,
      endYear: form.value.endYear,
      startMonth: form.value.startMonth,
      endMonth: form.value.endMonth,
    }
    const userID = this.user._id;
    this.usersService.addUserExperience(userID, experienceData);
    this.initUser();
    this.experienceIsVisible = false;
  }

  onEditExperience(form: NgForm, indexOfElement: number) {
    if (form.invalid) {
      return;
    }
    console.log(indexOfElement);
    const experienceData: any = {
      title: form.value.title,
      description: form.value.description,
      company: form.value.company,
      startYear: form.value.startYear,
      endYear: form.value.endYear,
      startMonth: form.value.startMonth,
      endMonth: form.value.endMonth,
    }
    console.log(experienceData);
    const userID = this.user._id;
    this.usersService.editUserExperience(userID, experienceData, indexOfElement);
    this.initUser();
    this.editExperienceIsVisible = false;
  }

  onDeleteExperience(indexOfElement: number) {
    const userID = this.user._id;
    this.usersService.deleteUserExperience(userID, this.selectedExperience, indexOfElement);
    this.initUser();
    this.deleteExperienceIsVisible = false;
  }

  // Skills Modal 

  skillsIsVisible = false;
  skillsIsConfirmLoading = false;

  addSkills(): void {
    this.skillsIsVisible = true;
  }

  skillsModal(): void {
    this.skillsIsVisible = true;
  }

  skillsOk(): void {
    this.skillsIsConfirmLoading = true;
    setTimeout(() => {
      this.skillsIsVisible = false;
      this.skillsIsConfirmLoading = false;
    }, 1000);
  }

  skillsCancel(): void {
    this.skillsIsVisible = false;
  }

  editSkillsIsVisible = false;
  editSkillsIsConfirmLoading = false;

  editSkills(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    let currentSkill =  this.user.skills[indexOfElement];
    console.log(currentSkill);
    this.editSkillsIsVisible = true;
  }

  editSkillskillsModal(): void {
    this.editSkillsIsVisible = true;
  }

  editSkillsOk(): void {
    this.editSkillsIsConfirmLoading = true;
    setTimeout(() => {
      this.editSkillsIsVisible = false;
      this.editSkillsIsConfirmLoading = false;
    }, 1000);
  }

  editSkillsCancel(): void {
    this.editSkillsIsVisible = false;
  }

  deleteSkillsIsVisible = false;
  deleteSkillsIsConfirmLoading = false;

  deleteSkill(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    this.selectedSkill = this.user.skills[indexOfElement];
    this.deleteSkillsIsVisible = true;
  }

  deleteSkillskillsModal(): void {
    this.deleteSkillsIsVisible = true;
  }

  deleteSkillsOk(): void {
    this.deleteSkillsIsConfirmLoading = true;
    setTimeout(() => {
      this.deleteSkillsIsVisible = false;
      this.deleteSkillsIsConfirmLoading = false;
    }, 1000);
  }

  deleteSkillsCancel(): void {
    this.deleteSkillsIsVisible = false;
  }

  onAddSkill(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const userID = this.user._id;
    console.log(userID);
    // this.usersService.addUserSkill(userID!, form.value.skill)
    // .subscribe((result: any) => {
    //   console.log(result);
    //   form.reset();
    //   this.skillsIsVisible = false;
    //   this.usersService.init()
    //   this.initUser();
    // });
    const userSkill =  {
      skill: form.value.skill
    }
    console.log(userSkill);
    this.usersService.addUserSkill(userID, userSkill);
      this.initUser();
      this.usersService.init();
      this.skillsIsVisible = false;
  }

  onEditSkill(form: NgForm, indexOfElement: number) {
    if (form.invalid) {
      return;
    }
    console.log(indexOfElement);
    const skillData: any = {skill: form.value.skill};
    console.log(skillData);
    const userID = this.user._id;
    this.usersService.editUserSkill(userID, skillData, indexOfElement);
    this.initUser();
    this.editSkillsIsVisible = false;
  }

  onDeleteSkill(indexOfElement: number) {
    const userID = this.user._id;
    const selectedSkill = {skill: this.selectedSkill};
    this.usersService.deleteUserSkill(userID, selectedSkill, indexOfElement);
    this.initUser();
    this.deleteSkillsIsVisible = false;
  }

  // Education Modal 

  educationIsVisible = false;
  educationIsConfirmLoading = false;

  addEducation(): void {
    this.educationIsVisible = true;
  }

  educationModal(): void {
    this.educationIsVisible = true;
  }

  educationOk(): void {
    this.educationIsConfirmLoading = true;
    setTimeout(() => {
      this.educationIsVisible = false;
      this.educationIsConfirmLoading = false;
    }, 1000);
  }

  educationCancel(): void {
    this.educationIsVisible = false;
  }

  editEducationIsVisible = false;
  editEducationIsConfirmLoading = false;

  editEducation(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    let currentEducation =  this.user.education[indexOfElement];
    console.log(currentEducation);
    this.editEducationIsVisible = true;
  }

  editEducationModal(): void {
    this.editEducationIsVisible = true;
  }

  editEducationOk(): void {
    this.editEducationIsConfirmLoading = true;
    setTimeout(() => {
      this.editEducationIsVisible = false;
      this.editEducationIsConfirmLoading = false;
    }, 1000);
  }

  editEducationCancel(): void {
    this.editEducationIsVisible = false;
  }

  deleteEducationIsVisible = false;
  deleteEducationIsConfirmLoading = false;


  deleteEducation(indexOfElement: any): void {
    console.log(indexOfElement);
    this.indexOfElement= indexOfElement;
    this.selectedEducation = this.user.education[indexOfElement];
    this.deleteEducationIsVisible = true;
  }

  deleteEducationModal(): void {
    this.deleteEducationIsVisible = true;
  }

  deleteEducationOk(): void {
    this.deleteEducationIsConfirmLoading = true;
    setTimeout(() => {
      this.deleteEducationIsVisible = false;
      this.deleteEducationIsConfirmLoading = false;
    }, 1000);
  }

  deleteEducationCancel(): void {
    this.deleteEducationIsVisible = false;
  }

  onAddEducation(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const educationData: any = {
      level: form.value.level,
      school: form.value.school,
      description: form.value.description,
      startYear: form.value.startYear,
      endYear: form.value.endYear,
    }
    const userID = this.user._id;
    this.usersService.addUserEducation(userID, educationData);
    this.initUser();
    this.educationIsVisible = false;
  }

  onEditEducation(form: NgForm, indexOfElement: number) {
    if (form.invalid) {
      return;
    }
    console.log(indexOfElement);
    const educationData: any = {
      title: form.value.title,
      description: form.value.description,
      company: form.value.company,
      startYear: form.value.startYear,
      endYear: form.value.endYear,
      startMonth: form.value.startMonth,
      endMonth: form.value.endMonth,
    }
    console.log(educationData);
    const userID = this.user._id;
    this.usersService.editUserEducation(userID, educationData, indexOfElement);
    this.initUser();
    this.editEducationIsVisible = false;
  }

  onDeleteEducation(indexOfElement: number) {
    const userID = this.user._id;
    this.usersService.deleteUserEducation(userID, this.selectedEducation, indexOfElement);
    this.initUser();
    this.deleteEducationIsVisible = false;
  }


  convert(){
    var doc = new jsPDF();
    doc.text("This is just a sample. The final will be produced on the CV & Resume Builder & Career Guidance Systems", 10, 10);
    doc.save("a4.pdf");
  }


}
