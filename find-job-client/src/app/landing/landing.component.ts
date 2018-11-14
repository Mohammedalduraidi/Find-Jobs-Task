import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openModal = () => {
    this.dialog.open(LoginModal);
  }
  openSignup = () => {
    this.dialog.open(SignupModal);
  }
}
@Component({
  selector: 'login-Modal',
  templateUrl: 'login.html',
})
export class LoginModal {
  acctypes = [
    { value: 'bm', viewValue: 'Business Maneger' },
    { value: 'pm', viewValue: 'Project Manager' }
  ]
  access = ''

  constructor(
    public dialogRef: MatDialogRef<LandingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginModal,
    private router: Router) { }

  cancel = (): void => {
    this.dialogRef.close();
  }

  onSelect(element = '') {
    console.log("jackel is here", element)
  }

}
@Component({
  selector: 'signup-Modal',
  templateUrl: 'signup.html',
})
export class SignupModal {
  acctypes = [
    { value: 'bm', viewValue: 'Business Maneger' },
    { value: 'pm', viewValue: 'Project Manager' }
  ]
  access = ''

  constructor(
    public dialogRef: MatDialogRef<LandingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SignupModal,
    private router: Router) { }

  cancel = (): void => {
    this.dialogRef.close();
  }

  onSelect(element = '') {
    console.log("jackel is here", element)
  }

}
