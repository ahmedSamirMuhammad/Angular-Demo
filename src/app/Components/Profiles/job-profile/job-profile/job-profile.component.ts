import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.scss']
})
export class JobProfileComponent implements OnInit{
 
  jobData: Array<any> = [];
  jobId: number; 

  constructor(private companyService: CompanyService, private jobService: JobService, private route: ActivatedRoute) {}


  //<!---------- calling the function "getJobByID" from "job" service / Start -------------->
  ngOnInit() {
    // get the job ID from the route
    this.jobId = +this.route.snapshot.paramMap.get('id');

    // fetch job details by ID
    this.jobService.getJobByID(this.jobId).subscribe(
      (response: any) => {
        // assign data to variables
        this.jobData = response.data;
      },
      (error: any) => {
        console.error('Error fetching job data', error);
      }
    );
  }
  //<!-------- calling the function "getJobByID" from "job" service  / End ---------------->
}
