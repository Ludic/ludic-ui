import { LudicConstructor } from '@ludic/ludic'
import { LudicUI, RenderFunction } from './ui'

declare module '@ludic/ludic/dist/core/app' {
  interface LudicConstructor {
    ui: LudicUI
  }
}

export interface LudicUIOptions {
  render: RenderFunction
}

export function install(app: LudicConstructor, {render}: LudicUIOptions) {
  app.ui = new LudicUI(app as any)
  app.registerUpdateFunction(function(){
    app.ui.update(render)
  })
}

export function plugin(opts: LudicUIOptions){
  return function (app: LudicConstructor) {
    install(app, opts)
  }
}
