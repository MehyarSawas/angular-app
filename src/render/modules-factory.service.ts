import {Injectable} from '@angular/core';

/**
 * service to return an import of the lazy loaded module
 */
@Injectable({
  providedIn: 'root'
})
export class ModulesFactoryService {
  /**
   * holds all the lazy loading modules imports
   * @protected
   */
  protected readonly moduleImports: any = {
    ContainersModule: import('../containers/containers.module')
  };

  /**
   * import a module dynamically and return its instance
   */
  public load(moduleName: string) {
    return this.moduleImports[moduleName];
  }
}
