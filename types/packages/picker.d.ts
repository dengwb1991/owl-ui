import { OwlUIPopupComponent } from '../component'

interface OptionsType {
  key: string | number
  value: string | number
}

export declare class OwlPicker extends OwlUIPopupComponent {
  data: OptionsType[] | string[] | number[]
  title: string
  lockScroll: boolean
  maskClosable: boolean
}