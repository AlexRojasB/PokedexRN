import {ViewStyle} from 'react-native';

/**
 * All countdown keyboard offsets.
 */
export const offsets = {
  none: 0,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of countdowns.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-countdown carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: '#fff',
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    outer: {
      backgroundColor: '#fff',
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'} as ViewStyle,
  },
};

/**
 * The variations of countdowns.
 */
export type TrainerEditPresets = keyof typeof presets;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset?: TrainerEditPresets) {
  // any of these things will make you scroll
  return !preset || !presets[preset] || preset === 'fixed';
}
