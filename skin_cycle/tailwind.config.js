const plugin = require('tailwindcss/plugin')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: {
        'flower1': "url('/public/pics/plant6.jpg')",
      })
    },
  },
  variants: {
    backgroundImage: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
