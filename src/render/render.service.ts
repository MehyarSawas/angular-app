import {
  Compiler,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';
import {ModulesFactoryService} from './modules-factory.service';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor(public resolver: ComponentFactoryResolver,
              private factory: ModulesFactoryService,
              private compiler: Compiler) {
  }

  /**
   * add a dynamic component to the host container
   */
  public async renderComponent(module: string, componentName: string, host: ViewContainerRef): Promise<ComponentRef<any>> {
    const factory: ComponentFactory<any> | undefined = await this.getComponentFactory(module, componentName);
    if (!factory) {
      throw new Error(`could not find factory for ${componentName}`);
    }
    const componentRef: ComponentRef<any> = host.createComponent(factory, 0, host.injector);
    componentRef.changeDetectorRef.detectChanges();
    return componentRef;
  }

  /**
   * get the component factory by the compiler for the given component
   * @param moduleName
   * @param componentName
   * @private
   */
  private async getComponentFactory(moduleName: string, componentName: string): Promise<Promise<any> | boolean> {
    moduleName += 'Module';
    const moduleFactory: any = await this.factory.load(moduleName);
    const moduleAndFactories = await this.compiler.compileModuleAndAllComponentsAsync(moduleFactory[moduleName]);

    if (!moduleAndFactories) {
      return undefined;
    }

    return moduleAndFactories.componentFactories
      .find(factory => factory.componentType.name == componentName + 'Component');
  }
}
