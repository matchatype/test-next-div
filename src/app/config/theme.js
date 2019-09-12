import {createTheme, darkThemePrimitives, lightThemePrimitives} from 'baseui'
import {getMediaQuery} from 'baseui/helpers/responsive-helpers'
import {colors} from 'baseui/tokens'

const breakpoints = {
  small: 480,
  medium: 720,
  large: 1024,
  xl: 1280,
}

const responsivePrimitives = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.breakpoints[key] = breakpoints[key]
    acc.media[key] = getMediaQuery({
      'min-width': `${breakpoints[key]}px`,
    })
    return acc
  },
  {
    breakpoints: {},
    media: {},
  },
)

/*
 * TODO: Fix dark theme
 * Currently not working, because of an issue with Base Web dark theme
 * not exporting all theme primitives correctly.
 *
 * https://github.com/uber-web/baseui/issues/1775
 */
export const darkTheme = createTheme(
  {
    ...darkThemePrimitives,
    name: 'dark-theme',
    primaryFontFamily: 'Prompt, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  {
    ...responsivePrimitives,
    borders: {
      useRoundedCorners: true,
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px',
      popoverBorderRadius: '4px',
      surfaceBorderRadius: '4px',
    },
  },
)

export const lightTheme = createTheme(
  {
    ...lightThemePrimitives,
    name: 'light-theme',
    primaryFontFamily: 'Prompt, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    primary: colors.blue400,
    primary50: colors.blue50,
    primary100: colors.blue100,
    primary200: colors.blue200,
    primary300: colors.blue300,
    primary400: colors.blue400,
    primary500: colors.blue500,
    primary600: colors.blue600,
    primary700: colors.blue700,
  },
  {
    ...responsivePrimitives,
    borders: {
      useRoundedCorners: true,
      buttonBorderRadius: '4px',
      inputBorderRadius: '4px',
      popoverBorderRadius: '4px',
      surfaceBorderRadius: '4px',
    },
  },
)
