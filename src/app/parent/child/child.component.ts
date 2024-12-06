import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input('element') element!:String;
  @Output() dataEmitter=new EventEmitter<any>;

  emit()
  {
    this.dataEmitter.emit('child component is sending data');
  }
}
