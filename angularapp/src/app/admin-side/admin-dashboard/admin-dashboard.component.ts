import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 
  bikes : any 
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
    let obs = this.http.post("https://8080-febbfbfffcaddeddbadbeeefbebeedaedeeeacdcbd.examlyiopb.examly.io/admin/dashboard", 
  {
  "name":  "Customer004",
  "email":  "customer004@email.com",
  "tel":  "0000252525"
  })
  obs.subscribe(
  data  => {
    this.bikes = data 
  })
}

}
