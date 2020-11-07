import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  // CONSTRUCTOR

  constructor() { }

  // HELPER FUNCTIONS

  public consoleLog(message: string): void {
    console.log (message);
  }
}
