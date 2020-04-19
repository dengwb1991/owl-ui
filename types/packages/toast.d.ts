import { OwlUIPopupComponent } from '../component'

export type ToastType = 'down' | 'up' | 'left' | 'right'

export declare class OwlToast extends OwlUIPopupComponent {
  value: string
  text: string
  type: ToastType
  time: number
  maskVisible: boolean
}
