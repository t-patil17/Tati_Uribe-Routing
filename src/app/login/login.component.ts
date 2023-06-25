import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // variable create 

  name = "";
  email = "";
  password = "";

  // create array
  loginform: any = [];

  login (){
    let obj ={
      name:this.name,
      email:this.email,
      password:this.password

    }

    this.loginform .push(obj)
    console.log('name:', this.loginform)

    this.clear();
  }

  clear (){
    this.name='',
    this.email='',
    this.password=''
  }

}
