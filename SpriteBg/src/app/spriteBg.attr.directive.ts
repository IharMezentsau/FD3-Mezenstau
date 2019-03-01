import { Directive, ElementRef, Input, Attribute } from "@angular/core";

@Directive({
  selector: "[sprite-bg]",
})
export class SpriteBgDirective {

  constructor(private element: ElementRef, @Attribute("spriteBg-url") url: string,
    @Attribute("spriteBg-offset-x") offsetX: number, @Attribute("spriteBg-offset-y") offsetY: number,
    @Attribute("spriteBg-width") width: number, @Attribute("spriteBg-height") height: number) {

    this.setSmile(url || 'http://fe.it-academy.by/Examples/smileys.png', offsetX || 50,
      offsetY || 50, width || 25, height || 25);
  }

  setSmile(url: string, offsetX: number, offsetY: number, width: number, height: number):void {
    this.element.nativeElement.style.backgroundImage = `url(${url})`;
    this.element.nativeElement.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
    this.element.nativeElement.style.width = `${width}px`;
    this.element.nativeElement.style.height = `${height}px`;
  }

}
