import {StyleProp, ViewStyle} from 'react-native';

export interface PokemonRowProps {
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  pokemonId: number;

  pokemonName: string;
  pokemonType: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
}
