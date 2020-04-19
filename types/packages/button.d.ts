import { OwlUIComponent } from '../component'

export type ButtonType = 'default' | 'disabled' | 'light'

export declare class OwlButton extends OwlUIComponent {
  type: ButtonType
  inline: boolean
  outline: boolean
  btnStyle: object
}