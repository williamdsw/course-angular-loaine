import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    // HELPER FUNCTIONS

    getCursos() {
        return ['Angular 2', 'Java', 'Phonegap'];
    }

}
