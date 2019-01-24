import { Component } from '@angular/core';
@Component({
  selector: 'contact-detail-form',
  templateUrl: 'contact-detail-form.html'
})
export class ContactDetailFormComponent {
  edit: boolean = null;
  constructor() {
    this.edit = false;
  }
  onClicked(toggle){
    if(this.edit==true){
    }
    this.edit = toggle;
  }
  onSubmit(formValue: any){
    console.log(formValue);
  }
}