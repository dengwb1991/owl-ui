import Vue from 'vue'

export declare class OwlUIComponent extends Vue {
  static install (vue: typeof Vue): void
}

export declare class OwlUIPopupComponent extends OwlUIComponent {
  visible: boolean
  zIndex: number
  maskStyle: object
  containerStyle: object
  show (): any
  hide (): any
}
