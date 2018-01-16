import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class Emitter {

    private emitter = new EventEmitter<any>();

    get observer() {
        return this.emitter;
    }

    emit(value: any) {
        this.emitter.emit(value);
    }


}
