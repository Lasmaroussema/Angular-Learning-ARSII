import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './Highlight.directive';
import { SpacesPipe } from './spaces.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HighlightDirective,SpacesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'        
})
export class AppComponent {
ImagePath: any;
OnClick() {
throw new Error('Method not implemented.');
}
  title = 'angularP';
  isValid:boolean=true;
  table=[1,2,3,4,5,6];

  user={name:'Oussema',age:16};
  
  

  MyClub='ARSII ISSATSO';
  Name='';

  increment(){
    this.user.age++;
  }
  decrement(){
    this.user.age--;
  }

  getButtonColor(){
    return this.user.age<18?'red':'green';
  }
}
