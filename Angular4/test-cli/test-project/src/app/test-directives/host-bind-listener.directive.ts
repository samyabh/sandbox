import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHostBindListener]'
})

export class HostBindListenerDirective {

    constructor(private el: ElementRef){

    }

    @HostBinding('style.color')
    color:string = 'blue';

    @HostListener('mouseenter')
    mouseEnterDiv(){
        this.color = 'green';
    }

    @HostListener('mouseover')
    mouseOverDiv(){
        this.color = 'red';
    }

    @HostListener('mouseleave')
    mouseLeaveDiv(){
      this.color = 'yellow';
    }

    @HostListener('keyup', ['$event'])
    keyUpDive(key : KeyboardEvent){
      console.log(key);
      if(32 === key.keyCode){
          this.el.nativeElement.value = this.el.nativeElement.value.replace(' ', '_');
      }
      if(this.el.nativeElement.value.indexOf('virus') >= 0){
          alert('Virus détecté');
      }
    }

x
}
