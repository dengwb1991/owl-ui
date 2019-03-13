import { camelize } from './util'

export default function parseRenderData(data = {}, events = {}) {
  events = parseEvents(events)
  const type = typeof data === 'object'
  const props = type ? { ...data } : { value: data }
  const on = {}
  for (const name in events) {
    if (events.hasOwnProperty(name)) {
      const handlerName = events[name]
      if (props[handlerName] && type) {
        on[name] = props[handlerName]
        delete props[handlerName]
      }
    }
  }
  return {
    props,
    on
  }
}

function parseEvents(events) {
  const parsedEvents = {}
  events.forEach((name) => {
    parsedEvents[name] = camelize(`on-${name}`)
  })
  return parsedEvents
}
