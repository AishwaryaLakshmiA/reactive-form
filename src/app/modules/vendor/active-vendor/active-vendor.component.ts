import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  val!: any;
  vendorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required),
    selected: new FormControl('', Validators.required)   
  });

  get name(){
    return this.vendorForm.get('name');
  }
  get email(){
    return this.vendorForm.get('email');
  }
  get bio(){
    return this.vendorForm.get('bio');
  }
  get selected(){
    return this.vendorForm.get('selected');
  }
  submitForm()
  {
    this.val=this.vendorForm.value;
    this.vendorForm.reset();
    //console.log("jdcjd");
  }
}
