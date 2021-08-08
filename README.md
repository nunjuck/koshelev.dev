# koshelev.dev

[![ds](https://github.com/nunjuck/koshelev.dev/workflows/Deploy/badge.svg)](https://github.com/nunjuck/koshelev.dev/actions?query=workflow%3ADeploy)
[![ds](https://github.com/nunjuck/koshelev.dev/workflows/Test/badge.svg)](https://github.com/nunjuck/koshelev.dev/actions?query=workflow%3ATest)


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Example test

Filename `Logo.spec.js`

```code
import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})
```
