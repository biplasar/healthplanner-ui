import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router'
import { BehaviorSubject, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
import { HeaderComponent } from '../header/header.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  logedUser: User = null;

  /*get isLoggedIn() {
    return this.loggedIn.asObservable();
  }*/

  public username: string = "";
  public password: string = "";
  @Output() updateView = new EventEmitter();

  constructor(
    //private  dialog:  MatDialog,
    private router: Router,
    private _sharedService: SharedService,
  ) { }

  login() {

    if (this.username === "admin" && this.password === "admin") {
      //this.loggedIn.next(true);
      this.logedUser = new User();
      this.logedUser.username = "admin";
      this.logedUser.password = "admin";
      localStorage.setItem('logedUser', JSON.stringify(this.logedUser));
      this._sharedService.emitChange(this.logedUser);
      this.router.navigate(['/home']);
    }
    else {
      /*this.dialog.open(ErrorComponent,{ data: {
      message:  "Your login information are incorrect!"
      }});*/
      this._sharedService.emitChange(null);
    }
  }
  ngOnInit() {
    localStorage.removeItem('logedUser');
    this._sharedService.emitChange(null);
  }


}
