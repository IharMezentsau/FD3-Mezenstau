import { Directive, ElementRef, Input, Attribute } from "@angular/core";

@Directive({
  selector: "[sprite-bg]",
})
export class SpriteBgDirective {

  //@Input("url")
  //public url: string;
  //
  // @Input("offset-x")
  // public offsetX: number;
  //
  // @Input("offset-y")
  // public offsetY: number;
  //
  // @Input("width")
  // public width: number;
  //
  // @Input("height")
  // public height: number;

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


  // colors:Array<string>=['red','green','blue','cyan','magenta','yellow'];
  //
  // constructor(private element: ElementRef) {
  //
  //   this.setRandomColor();
  //
  //   setInterval( ()=>{
  //     this.setRandomColor()
  //   },2000);
  //
  // }
  //
  // setRandomColor():void {
  //   let randomColorIndex:number
  //     =Math.floor(Math.random()*this.colors.length);
  //   let randomColor:string
  //     =this.colors[randomColorIndex];
  //   // element:ElementRef - это Ангуляр-обёртка для HTML-тега
  //   // element.nativeElement - это обычный DOM-элемент
  //   this.element.nativeElement
  //     .style.backgroundColor=randomColor;
  // }

}
