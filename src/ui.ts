import { UIComponent } from './component'
import Ludic from '@ludic/ludic'

export interface RenderFunction {
  (comp: UIComponent, container: HTMLElement): void
}

export class LudicUI {

  private componentList = new Set<UIComponent>()
  private componentMap = new Map<string, UIComponent>()
  private container: HTMLDivElement

  constructor(app: typeof Ludic){
    // create the ui container
    this.container = document.createElement('div')
    this.container.style.overflow = 'visible'
    document.body.appendChild(this.container)
    console.log('init ui')
    // app.canvas.element
  }

  add<C extends UIComponent>(comp: C, name?: string): C {
    this.componentList.add(comp)
    if(name != null){
      this.componentMap.set(name, comp)
    }
    return comp
  }

  remove<C extends UIComponent>(nameOrComp: string|C): boolean {
    if(typeof nameOrComp == 'string'){
      const comp = this.componentMap.get(nameOrComp)
      if(comp != null){
        this.componentList.delete(comp)
      }
      return this.componentMap.delete(name)
    } else {
      return this.componentList.delete(nameOrComp)
    }
  }

  get(name: string){
    return this.componentMap.get(name)
  }

  has<C extends UIComponent>(nameOrComp: string|C): boolean {
    if(typeof nameOrComp == 'string'){
      return this.componentMap.has(nameOrComp)
    } else {
      return this.componentList.has(nameOrComp)
    }
  }

  update(render: RenderFunction){
    const components = this.componentList.values()
    for(let comp of components){
      if(comp.enabled){
        render(comp, this.container)
      }
    }
  }
}