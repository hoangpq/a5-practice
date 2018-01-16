import {Component, HostListener} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
    selector: 'todo-form',
    template: `
        <div>
            <form #f="ngForm" (submit)="addTodo($event, f.value)">
                <span>Add todo</span>
                <br/>
                <input type="text" name="todo" ngModel/>
            </form>
            <ul>
                <li *ngFor="let todo of todoList">
                    {{ todo.title }}
                </li>
            </ul>
            <!-- form builder -->
            <h3>Form Builder</h3>
            <form [formGroup]="myForm" (submit)="onFormBuilderSummit($event)">
                <input type="text" name="input" 
                       [formControl]="myForm.controls['todo']" />
                <div *ngIf="!myForm.valid">
                    <div *ngIf="!todoInput.valid && todoInput.touched">
                        Todo must be fill
                    </div>
                </div>
            </form>
        </div>
    `
})
export class TodoFormComponent {
    @HostListener('mousedown') hasPressed() {
        // console.log(`Mouse down`)
    }

    todoList: Array<any> = [];
    myForm: FormGroup;
    todoInput: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            todo: ['', Validators.required],
        });
        this.todoInput = this.myForm.controls['todo'];
    }

    onFormBuilderSummit($event: Event) {
        console.log($event);
    }

    addTodo($event: Event, form: any) {
        console.log(`Summit form data:`, form);
        $event.stopPropagation();
        if (!form.todo) return;
        this.todoList.push({
            title: form.todo,
            time: +new Date(),
        });
        form.value = '';
        // .focus();
        return false;
    }

}
