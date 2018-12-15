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
import ExampleDefault from './example-default'
import ExampleNotUseLine from './example-notuseline'
import ExampleMultiple from './example-multiple'
import ExampleObject from './example-object'
import ExampleCustom from './example-custom'

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