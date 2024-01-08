import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queryparameter';
  constructor(private router:Router){}
  login(){
this.router.navigate(['login',1])
// this.router.navigate('/login/'+1);
  }
  register(){
    this.router.navigate(['register'],{
      queryParams:{
        name:'srirama',
        city:'Badrachalam'
      }
    })
  }
}
