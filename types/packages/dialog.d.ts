import { OwlUIPopupComponent } from '../component'

interface BtnType {
  text: string
  callback?(): boolean | undefined
  color?: string
  style?: object
}

export declare class OwlDialog extends OwlUIPopupComponent {
  content: string
  maskClosable: boolean
  lockScroll: boolean
  title: string
  btns: BtnType[]
}
