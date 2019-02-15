import { Component } from "@angular/core";

@Component({
  //moduleId: module.id,
  selector: "sprite",
  templateUrl: "sprite.component.html",
  styleUrls: ["sprite.component.css"]
})

export class SpriteComponent {

  private spriteUrl: string = "http://fe.it-academy.by/Examples/cards2.png";
  private offsetX: number = 0;
  private offsetY: number = 0;
  private width: number = 144;
  private height: number = 194;

  getSpriteUrl(): string {
    return this.spriteUrl;
  }

  getOffsetX(): number {
    return this.offsetX;
  }

  getOffsetY(): number {
    return this.offsetY;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  mouseClick():void {
    this.offsetX -= this.getWidth();
    this.offsetY -= this.getHeight()
  }

}
