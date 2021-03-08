import {Component, ElementRef, Input, NgZone, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'm-split-container',
  templateUrl: './split-container.component.html',
  styleUrls: ['./split-container.component.css']
})
export class SplitContainerComponent {
  /**
   * holds the resize axis value
   * @private
   */
  @Input() public splitDirection: 'horizontal' | 'vertical' = 'vertical';
  /**
   * holds the mouse down listener to allow removing it
   */
  public mouseDownListener: any;
  @ViewChild('containerE') private containerE!: ElementRef;
  @ViewChild('leftCellE') private leftCellE!: ElementRef;
  @ViewChild('handleE') private handleE!: ElementRef;
  @ViewChild('rightCellE') private rightCellE!: ElementRef;

  constructor(private zone: NgZone,
              private renderer: Renderer2) {
  }

  /**
   * gets the resize handle and add the mouse listeners
   * set the width of the children based on the mouse move clientX
   * @private
   */
  public handleResize() {

    this.zone.runOutsideAngular(() => {
      const styleName = this.splitDirection == 'vertical' ? 'width' : 'height';
      const position = this.splitDirection == 'vertical' ? 'clientX' : 'clientY';

      const mouseMoveListener = this.renderer.listen(this.containerE.nativeElement, 'mousemove', event => {
        this.renderer.setStyle(this.leftCellE.nativeElement, 'flex-grow', 0);
        this.renderer.setStyle(this.leftCellE.nativeElement, styleName, (event[position] - 5) + 'px');
      });

      const mouseUpListener = this.renderer.listen('window', 'mouseup', () => {
        this.renderer.setStyle(this.handleE.nativeElement, 'transform', 'initial');
        mouseMoveListener();
        mouseUpListener();
      });

    });
  }
}
