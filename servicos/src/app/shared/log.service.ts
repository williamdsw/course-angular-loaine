import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  consoleLog(message: string) {
    console.log (message);
  }
}
