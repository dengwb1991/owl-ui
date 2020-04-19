import { OwlUIComponent } from '../component'

interface OptionsType {
  key: string | number
  value: string | number
}

export declare class OwlSelect extends OwlUIComponent {
  value: string | number
  data: OptionsType[] | string[] | number[]
  title: string
  placeholder: string
  lockScroll: boolean
  maskClosable: boolean
  zIndex: number
  maskStyle: object
  containerStyle: object
}
