import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder);
  //constructor(private _fb: FormBuilder){}

  public profileForm =  this.#fb.group({
    name: [''],    
    myStacks: this.#fb.group({
      front: new FormControl('Angular'),
      back: new FormControl('Spring')
    }),
    myFavoriteFoods:this.#fb.array([
      ['Lasanha']
    ])
  });

  public update() {
    this.profileForm.patchValue({
      name: 'Update name',
      myStacks: {
        front: "Vuejs",
        back: "nodejs"
      }
    });
  }

  public addMyFavoriteFoods(newFood: string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }
}
