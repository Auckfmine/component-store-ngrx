import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

}
