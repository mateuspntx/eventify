import AppProviders from '../src/contexts'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}

export const decorators= [
  (Story) =>(
    <AppProviders>
      <Story />
    </AppProviders>
  )
]
