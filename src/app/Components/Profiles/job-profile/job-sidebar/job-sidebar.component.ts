import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-sidebar',
  templateUrl: './job-sidebar.component.html',
  styleUrls: ['./job-sidebar.component.scss']
})
export class JobSidebarComponent {
  @Input() jobData: any;
}
