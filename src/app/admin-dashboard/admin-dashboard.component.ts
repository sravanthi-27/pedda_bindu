import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from '../accommodation/accommodation.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { AgentRegComponent } from '../agent-reg/agent-reg.component';
import { RegComponent } from '../reg/reg.component';
import axios from 'axios';




@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AccommodationComponent,
    FeedbackComponent,
    AgentRegComponent,
    RegComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent  {
  
  activeSection: string = 'Accommodation';
  showSection: string = ''; 

  
  // You can create a method to update showSection if needed
  setActiveSection(section: string) {
    this.activeSection = section;
    this.showSection = section; // Set the showSection based on the active section
  }
}
