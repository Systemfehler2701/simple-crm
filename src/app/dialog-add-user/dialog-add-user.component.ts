import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',

})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;


  constructor() { }

  ngOnInit(): void {

  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
  }

}
