import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui'

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        accent: '#f9e09e',
        gradient: 'linear-gradient(180deg, #111216 0%, #111216 100%)',
      },
    },
  },
}
