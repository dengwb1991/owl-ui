import { OwlUIComponent } from '../component'

interface DataType {
  key: string
}

export declare class OwlTabs extends OwlUIComponent {
  data: DataType[] | string[] | number[]
  tabWidth: string
  tabHeight: string
  tabColor: string
  tabStyle: object
  fontSize: string
  fontFamily: string
  name: string
  active: string | number
  background: string
  highlight: string
  activeStyle: object
  lineUse: boolean
  lineHeight: string
  lineWidth: string
  lineColor: string
  lineStyle: object
  initCallback: boolean
}
