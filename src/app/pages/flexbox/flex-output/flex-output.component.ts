import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FlexItemService } from '@app/core/services/flex-item.service';
import { FlexService } from '@app/core/services/flex.service';
import { objectToCSS } from '@app/core/utilities/convertToCSSPropertiy';
import { CssCodePipe } from '@app/shared/pipes/cssCode.pipe';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { SuccessMessageComponent } from '@app/shared/components/success-message/success-message.component';
import { BoxService } from '@app/core/services/box.service';

@Component({
  selector: 'app-flex-output',
  templateUrl: './flex-output.component.html',
  styleUrls: ['./flex-output.component.scss'],
  animations: [
    trigger('boxAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '300ms',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 0.8 }),
            style({ opacity: 0, offset: 1 }),
          ])
        ),
      ]),
      transition('* => *', [
        animate(
          '300ms',
          keyframes([
            style({ flex: '0 0 calc(33.33% - 20px)', offset: 0 }),
            style({ flex: '0 0 calc(25% - 20px)', offset: 0.2 }),
            style({ flex: '0 0 calc(25% - 20px)', offset: 0.8 }),
            style({ flex: '0 0 calc(33.33% - 20px)', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('reorderAnimation', [
      state('initial', style({})),
      state('reordered', style({ transform: 'translate(-100px, -100px)' })),
      transition('initial => reordered', animate('500ms ease-in-out')),
    ]),
  ],
})
export class FlexOutputComponent implements OnInit {
  @ViewChild('messageAnchor', { read: ViewContainerRef })
  messageAnchor: ViewContainerRef;

  copyCode(code: any) {
    const jsonString = objectToCSS(code);
    const el = document.createElement('textarea');
    el.value = jsonString;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.showSuccessMessage();
    // // Show copied message
    // const message = document.createElement('div');
    // message.classList?.add(
    //   'text-center',
    //   'bg-blue-500',
    //   'text-white',
    //   'rounded',
    //   'shadow',
    //   'my-6',
    //   'absolute',
    //   'top-4',
    //   'right-4',
    //   'p-4'
    // );
    // message.innerText = 'Copied!';
    // document.body.appendChild(message);
    // setTimeout(() => {
    //   document.body.removeChild(message);
    // }, 2000);
  }

  flexValue$: Observable<any>;
  cssObject: any;
  cssObject2: any;
  state$: Observable<any>;
  generatedCode: any;

  reorderState: string = 'initial';
  boxes2 = [1, 2];
  reorderBoxes() {
    this.reorderState = 'reordered';

    setTimeout(() => {
      // Swap the positions of the boxes
      [this.boxes2[0], this.boxes2[1]] = [this.boxes2[1], this.boxes2[0]];
      this.reorderState = 'initial';
    }, 500);
  }

  boxes: any[] = [];
  constructor(
    private flexService: FlexService,
    private boxService: BoxService,
    private toCSS: CssCodePipe,
    private flexItemService: FlexItemService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.flexValue$ = this.flexService.flexValue$;
    this.state$ = this.flexService.state$;
  }

  showSuccessMessage() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      SuccessMessageComponent
    );
    const componentRef: any = this.messageAnchor.createComponent(factory);
    componentRef.instance.message = 'Copied!';
    componentRef.instance.closeAfter(3000);
  }

  ngOnInit() {
    this.loadCSS();
    this.loadCSS2();
    this.boxes = this.boxService.boxes;
  }

  addBox() {
    this.boxService.createBox();
  }

  removeBox(box: any) {
    this.boxService.removeBox(box);
  }

  loadCSS(): void {
    this.flexService.flexValue$.subscribe((cssProps) => {
      console.log(cssProps, 'CSS from Service');
      this.cssObject = cssProps;
    });
  }

  loadCSS2(): void {
    this.flexItemService.flexItemData.subscribe((d) => {
      this.cssObject2 = d;
    });
  }
}
