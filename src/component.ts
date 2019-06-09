
export abstract class UIComponent {

  enabled: boolean = true

  abstract render<F extends (...args: any) => any>(h: (...args: Parameters<F>)=>ReturnType<F>): ReturnType<F>

}