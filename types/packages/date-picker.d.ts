import { OwlUIPopupComponent } from '../component'

export declare class OwlDatePicker extends OwlUIPopupComponent {
  format: string
  min: Date | string
  max: Date | string
  title: string
  lockScroll: boolean
  maskClosable: boolean
}