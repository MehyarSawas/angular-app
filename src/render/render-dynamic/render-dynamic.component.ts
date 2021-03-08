import {Component, OnInit, ViewChild} from '@angular/core';
import {ComponentHostDirective} from '../component-host.directive';
import {ActivatedRoute} from '@angular/router';
import {RenderService} from '../render.service';

@Component({
  selector: 'm-render-dynamic',
  templateUrl: './render-dynamic.component.html',
  styleUrls: ['./render-dynamic.component.css']
})
export class RenderDynamicComponent implements OnInit {

  @ViewChild(ComponentHostDirective, {static: true}) public hostContainer!: ComponentHostDirective;

  constructor(public route: ActivatedRoute,
              private render: RenderService) {
  }

  public ngOnInit(): void {
    this.addComponent();
  }

  /**
   * add a dynamic component to the host container
   */
  public addComponent() {

    this.route.params.subscribe(params => {
      if (!params.component || !params.module || !this.hostContainer) return;
      this.render.renderComponent(params.module, params.component, this.hostContainer.vcRef);
    });

  }
}
