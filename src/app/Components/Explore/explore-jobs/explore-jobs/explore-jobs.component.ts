import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-explore-jobs',
  templateUrl: './explore-jobs.component.html',
  styleUrls: ['./explore-jobs.component.scss'],
})
export class ExploreJobsComponent {
  categories: Array<any> = [];
  jobs_array: Array<any> = [];

  constructor(private jobService: JobService, private catService: CategoryService) {

    //<!---------- calling the function "getCategories" from "category" service / Start -------------->
    this.catService.getCategories().subscribe(
      (response: any) => {
        if (response.status === 202) {
          this.categories = response.data.map((category: any) => category.name);
        } else {
          console.error('Error fetching categories: Unexpected response status');
        }
      },
      (error: any) => {
        console.error('Error fetching categories', error);
      }
    );
    
      //<!-------- calling the function "getCategories" from "category" service  / End ---------------->
  }

  ngOnInit() {

    //<!---------- calling the function "getJobs" from "job" service / Start -------------->
    this.jobService.getJobs().subscribe(
      (response: any) => {
        this.jobs_array = response.data;
      },
      (error: any) => {
        console.error('Error fetching jobs', error);
      }
    );
    //<!-------- calling the function "getJobs" from "job" service  / End ---------------->

  





  }










  // jobs_array: Array<any> = [
  //   {
  //     id: 1,
  //     logo: '/assets/images/company-logo-01.png',
  //     title: 'Bilingual Event Support Specialist',
  //     company_name: 'Hexagon',
  //     location: 'Cairo',
  //     type: 'Full-Time',
  //     date: '12 August 2022',
  //   },
  //   {
  //     id: 2,
  //     logo: '/assets/images/company-logo-placeholder.png',
  //     title: 'Competition Law Officer',
  //     company_name: 'Laxo',
  //     location: 'Alexandria',
  //     type: 'Part-Time',
  //     date: '20 May 2023',
  //   },
  //   {
  //     id: 3,
  //     logo: '/assets/images/company-logo-02.png',
  //     title: 'Barista and Cashier',
  //     company_name: 'Coffee',
  //     location: 'Giza',
  //     type: 'Intership',
  //     date: '02 November 2023',
  //   },
  //   {
  //     id: 4,
  //     logo: '/assets/images/company-logo-03.png',
  //     title: 'Restaurant General Manager',
  //     company_name: 'King',
  //     location: 'Luxor',
  //     type: 'Contract',
  //     date: '30 January 2023',
  //   },
  //   {
  //     id: 5,
  //     logo: '/assets/images/company-logo-04.png',
  //     title: 'Administrative Assistant',
  //     company_name: 'Mates',
  //     location: 'New Capital City',
  //     type: 'Full-Time',
  //     date: '07 June 2023',
  //   },
  // ];
}
