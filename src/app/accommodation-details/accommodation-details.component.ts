import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-accommodation-details',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterOutlet,
    AppComponent
  ],
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit {
  tableData: any[] = [];
  tableKeys: string[] = [];

  async loadData() {
    try {
      const response = await axios.get('http://localhost:5300/api/accommodation');
      this.tableData = response.data;
      this.tableKeys = this.tableData.length ? Object.keys(this.tableData[0]) : [];
    } catch (error) {
      console.error('Error loading accommodation data:', error);
      this.tableData = [];
    }
  }

  ngOnInit() {
    this.loadData();
  }
}