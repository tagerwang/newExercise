import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from '../pipes.pipe';
import { DirectDirective } from '../direct.directive';

// pipe 管道
const PIPES = [
  PipesPipe
];
// direct 指令
const DIRECT = [
  DirectDirective
];
@NgModule({
  declarations: [
    ...PIPES,
    ...DIRECT
  ],
  exports: [
    ...PIPES,
    ...DIRECT
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
