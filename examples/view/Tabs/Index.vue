<template>
  <div>
    <ExampleDefault/>

    <ExampleNotUseLine/>

    <ExampleMultiple/>

    <ExampleObject/>

    <ExampleCustom/>
  </div>
</template>

<script>
import ExampleDefault from './ExampleDefault'
import ExampleNotUseLine from './ExampleNotUseLine'
import ExampleMultiple from './ExampleMultiple'
import ExampleObject from './ExampleObject'
import ExampleCustom from './ExampleCustom'

export default {
  components: {
    ExampleDefault,
    ExampleNotUseLine,
    ExampleMultiple,
    ExampleObject,
    ExampleCustom
  }
}
</script>