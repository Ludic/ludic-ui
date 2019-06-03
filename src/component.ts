import { TemplateResult } from 'lit-html'

export abstract class UIComponent {

  enabled: boolean = false

  abstract render(): TemplateResult

}