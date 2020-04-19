import { OwlUIPopupComponent } from '../component'

export type PlacementType = 'down' | 'up' | 'left' | 'right'

export declare class OwlDrawer extends OwlUIPopupComponent {
  maskClosable: boolean
  placement: PlacementType
  lockScroll: boolean
}