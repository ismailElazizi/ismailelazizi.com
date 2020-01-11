import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    modes: {
        dark: {
            ...novelaTheme.colors.modes.dark, 
            gradient:
        "linear-gradient(180deg, #111216 0%, #111216 100%)",  
        secondary: '#73737D',
        accent: '#f9e09e',
        grey: '#73737D',
        }
    }

   
  },
};
