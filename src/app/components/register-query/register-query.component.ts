import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-query',
  templateUrl: './register-query.component.html',
  styleUrls: ['./register-query.component.css']
})
export class RegisterQueryComponent {
constructor(private route:ActivatedRoute){
  // console.log(this.route.snapshot.queryParams);
  this.route.queryParams.subscribe(res=>{
    console.log(res);
  })
}
}
