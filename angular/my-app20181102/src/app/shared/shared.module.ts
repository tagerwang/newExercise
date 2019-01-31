import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from '../pipes.pipe';

// pipe 管道
const PIPES = [
  PipesPipe
];
@NgModule({
  declarations: [
    ...PIPES
  ],
  exports: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
