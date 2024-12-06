import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit{

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(""),
    userName: new FormControl("user@123", [Validators.email]),
    city: new FormControl(""),
    zipCode: new FormControl(""),
    isAcceptTerms: new FormControl(""),
    skills: new FormArray([])
  });

// Subscribe to value changes in ngOnInit
ngOnInit(): void {
  this.studentForm.get('firstName')?.valueChanges.subscribe(value => {
    console.log('First Name changed:', value);
  });
}

  // Method to get the skills FormArray
  get skills(): FormArray {
    return this.studentForm.get('skills') as FormArray;
  }

  // Method to add a new skill field
  addSkill(): void {
    const skillControl = new FormControl('', Validators.required);
    this.skills.push(skillControl);
  }

  // Method to remove a skill field at a specific index
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value); 
    } else {
      console.log('Form is invalid');
    }
  }
}
