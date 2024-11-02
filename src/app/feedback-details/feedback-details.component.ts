import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  tableData: any[] = [];
  tableKeys: string[] = [];

  async loadData() {
    try {
      const response = await axios.get('http://localhost:5300/api/feedback');
      this.tableData = response.data;
      if (this.tableData.length) {
        this.tableKeys = Object.keys(this.tableData[0]);
      }
    } catch (error) {
      console.error('Error loading feedback data:', error);
      this.tableData = [];
    }
  }

  ngOnInit() {
    this.loadData();
  }
}
