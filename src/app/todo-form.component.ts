import {Component, HostListener} from '@angular/core';

@Component({
    selector: 'todo-form',
    template: `
        <div>
            <form (submit)="addTodo($event, todoInput)">
                <span>Add todo</span>
                <br/>
                <input type="text" name="todo" #todoInput/>
            </form>
            <ul>
                <li *ngFor="let todo of todoList">
                    {{ todo.title }}
                </li>
            </ul>
        </div>
    `
})
export class TodoFormComponent {
    @HostListener('mousedown') hasPressed() {
        // console.log(`Mouse down`)
    }
    todoList: Array<any> = [];
    votes: number = 0;

    addTodo($event: Event, todo: HTMLInputElement) {
        $event.stopPropagation();
        if (!todo.value) return;
        this.todoList.push({
            title: todo.value,
            time: +new Date(),
        });
        todo.value = '';
        todo.focus();
        return false;
    }

}
