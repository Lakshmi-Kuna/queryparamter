import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-query',
  templateUrl: './login-query.component.html',
  styleUrls: ['./login-query.component.css']
})
export class LoginQueryComponent {
constructor(private route:ActivatedRoute){
  // console.log(+this.route.snapshot.params);
  this.route.params.subscribe((res)=>{
    console.log(res);
  })
}
}
