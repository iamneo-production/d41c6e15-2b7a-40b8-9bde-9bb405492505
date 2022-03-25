import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { Company } from '../company.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 /*companylist: Company[] = [
   new Company("abc","xyz",123),
   new Company("def","uvw",456),
   new Company("ghi","rst",789),
 ];
  */
  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
    let obs=this.http.get("https://8080-cefbfdbddeddbadbeeefbebeedaedeeeacdcbd.examlyiopb.examly.io/");
    obs.subscribe((response) => {console.log(response)})
  }

}
