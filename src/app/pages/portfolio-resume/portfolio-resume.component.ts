import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-resume',
  templateUrl: './portfolio-resume.component.html',
  styleUrls: ['./portfolio-resume.component.scss']
})
export class PortfolioResumeComponent implements OnInit {

  constructor() { }

  showTextResume = false;

  ngOnInit(): void {
    if (window.innerWidth < 600) {
      this.showTextResume = true;
    } else {
      this.showTextResume = false;
    }
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/pdf/my_resume.pdf');
    link.setAttribute('download', `my_resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
