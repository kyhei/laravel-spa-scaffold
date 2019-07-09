import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import NotFoundPage from '../app/pages/NotFoundPage'
import WelcomePage from '../app/pages/WelcomePage'

storiesOf('Page previews', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'welcome page',
    () => ({
      components: { WelcomePage },
      template: `<WelcomePage></WelcomePage>`
    })
  )
  .add(
    'not found page',
    () => ({
      components: { NotFoundPage },
      template: `<NotFoundPage></NotFoundPage>`
    })
  )