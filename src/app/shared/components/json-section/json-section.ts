import {Component, Input} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-json-section',
    imports: [
        JsonPipe
    ],
  templateUrl: './json-section.html',
  styleUrl: './json-section.scss',
})
export class JsonSection {

  @Input() public title: string = 'Dados:';
  @Input() public data: object = {};
}
