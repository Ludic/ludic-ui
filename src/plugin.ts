import { LudicConstructor } from '@ludic/ludic'
import { LudicUI } from './ui'

declare module '@ludic/ludic/dist/core/app' {
  interface LudicConstructor {
    ui: LudicUI
  }
}

export default function plugin(app: LudicConstructor) {
  console.log('install ludic ui')
  app.ui = new LudicUI(app as any)
  app.registerUpdateFunction(function(){
    app.ui.render()
  })
}
