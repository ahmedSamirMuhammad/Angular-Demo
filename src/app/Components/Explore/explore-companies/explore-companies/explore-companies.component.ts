import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-explore-companies',
  templateUrl: './explore-companies.component.html',
  styleUrls: ['./explore-companies.component.scss'],
})
export class ExploreCompaniesComponent {

  company_list: Array<any> = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {

    //<!---------- calling the function "getCompanies" from "company" service / Start -------------->
    this.companyService.getCompanies().subscribe(
      (response: any) => {
        this.company_list = response.data;
      },
      (error: any) => {
        console.error('Error fetching companies', error);
      }
    );
  }
      //<!-------- calling the function "getCompanies" from "company" service  / End ---------------->
}
