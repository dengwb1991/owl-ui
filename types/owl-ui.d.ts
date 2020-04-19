import Vue from 'vue'

import { OwlUIComponent } from './component'

/**
 * component common definition
 */
export type Component = OwlUIComponent

export function install (vue: typeof Vue): void

import { OwlButton } from './packages/button'
import { OwlButtonGroup } from './packages/button-group'
import { OwlDatePicker } from './packages/date-picker'
import { OwlDialog } from './packages/dialog'
import { OwlDrawer } from './packages/drawer'
import { OwlInputGroup } from './packages/input-group'
import { OwlInput } from './packages/input'
import { OwlPicker } from './packages/picker'
import { OwlRange } from './packages/range'
import { OwlSelectGroup } from './packages/select-group'
import { OwlSelect } from './packages/select'
import { OwlSwitch } from './packages/switch'
import { OwlTabs } from './packages/tabs'
import { OwlToast } from './packages/toast'

export class Button extends OwlButton {}
export class ButtonGroup extends OwlButtonGroup {}
export class DatePicker extends OwlDatePicker {}
export class Dialog extends OwlDialog {}
export class Drawer extends OwlDrawer {}
export class InputGroup extends OwlInputGroup {}
export class Input extends OwlInput {}
export class Picker extends OwlPicker {}
export class Range extends OwlRange {}
export class SelectGroup extends OwlSelectGroup {}
export class Select extends OwlSelect {}
export class Switch extends OwlSwitch {}
export class Tabs extends OwlTabs {}
export class Toast extends OwlToast {}

declare module 'vue/types/vue' {
  interface Vue {
    /** create Drawer instance */
    $drawer(options: object): Drawer
    /** create Dialog instance */
    $dialog(options: object): Dialog
    /** create DatePicker instance */
    $datePicker(options: object): DatePicker
    /** create Picker instance */
    $picker(options: object): Picker
    /** create Toast instance */
    $toast(options: object | string): Toast
  }
}
