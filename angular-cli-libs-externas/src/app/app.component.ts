import { Component } from '@angular/core';

// importa todos arquivos da biblioteca passando um alias _
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli-libs-externas';

  // exemplo lodash
  list = _.map ([1, 2, 3], (numero) => `# ${numero}`);
}
