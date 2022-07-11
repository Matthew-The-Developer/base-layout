import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[spacer]'
})
export class SpacerDirective {
  @Input() spacer: string = '';
  @HostBinding('style.flex') flex: string = '1 1 auto';
  
  constructor() { }

  ngOnInit(): void {
    this.flex = !!this.spacer ? `0 0 ${this.spacer}` : this.flex;
  }
}
