// Image imports
import signInBg from '../assets/images/sign-in-bg.jpg';
import emptyAvatar from '../assets/images/empty-avatar.webp';
import demoImg from '../assets/images/demo-img.webp';

/********* Colors **********/
export const colors = {
  // Primary color
  primary: '#403075',
  primaryDark: '#261758',
  primaryDarker: '#13073A',
  primaryLight: '#615192',
  primaryLighter: '#887CAF',
  primaryOpacity: 'rgba(64, 48, 117, 0.1)',

  // Secondary color
  secondary: '#AA8439',
  secondaryDark: '#805C15',
  secondaryDarker: '#553900',
  secondaryLight: '#D4B16A',
  secondaryLighter: '#FFE3AA',

  // Info color
  info: '#AAAA39',
  infoDark: '#808015',
  infoDarker: '#555500',
  infoLight: '#D4D46A',
  infoLighter: '#FFFFAA',

  // Basic colors
  white: '#FFFFFF',
  whiteOpacity: 'rgba(255,255,255,0.90)',
  gray: '#CCCCCC',
  darkGray: '#555555',
  red: '#FF0000',
  green: '#00FF00',
};

/********* Sizes **********/
export const sizes = {
  extraSmall: 4,
  small: 8,
  base: 16,
  large: 24,
  extraLarge: 32,
};

/********* Font Weights **********/
export const fontWeights = {
  thin: '300',
  regular: '400',
  medium: '500',
  bold: '600',
  bolder: '700',
  black: '900',
};


/********* Mixins **********/
export const mixins = {
  // Min Width
  minWidth100: {
    minWidth: '100%',
  },

  // Width
  width100: {
    width: '100%',
  },
  width75: {
    width: '75%',
  },

  // Min Height
  minHeight100: {
    minHeight: '100%',
  },

  // Height
  height100: {
    height: '100%',
  },
  height75: {
    height: '75%',
  },
  height50: {
    height: '50%',
  },

  // Flex
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexStart: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },

  // BoxShadows [No support]
  boxShadows: {
    primary: {
      boxShadow: `box-shadow: ${sizes.base} ${sizes.base} ${sizes.extraLarge} 0 ${colors.primaryLighter};`
    },
  },

  // Borders
  borders: {
    border1: {
      borderWidth: 1,
    },
    border2: {
      borderWidth: 2,
    },
    base: {
      borderColor: colors.darkGray,
    },
    primary: {
      borderColor: colors.primary
    },
    secondary: {
      borderColor: colors.secondary,
    },
    rounded: {
      borderRadius: 8
    }
  },

  // Text Decorations
  textDecorations: {
    underline: {
      textDecorationLine: 'underline',
    },
  },

  // Text Alignment
  textAlignments: {
    center: {
      textAlign: 'center',
    },
  },

  // Transitions
  transitions: {
    bgColor: 'backgroundColor .3s ease',
  },

  // Spacing
  margins: {
    // Vertical
    marginVertical1: {
      marginVertical: sizes.extraSmall,
    },
    marginVertical2: {
      marginVertical: sizes.small,
    },
    marginVertical3: {
      marginVertical: sizes.base,
    },
    marginVertical4: {
      marginVertical: sizes.large,
    },
    marginVertical5: {
      marginVertical: sizes.extraLarge,
    },
    marginVerticalAuto: {
      marginVertical: 'auto',
    },

    // Top
    marginTop1: {
      marginTop: sizes.extraSmall,
    },
    marginTop2: {
      marginTop: sizes.small,
    },
    marginTop3: {
      marginTop: sizes.base,
    },
    marginTop4: {
      marginTop: sizes.large,
    },
    marginTop5: {
      marginTop: sizes.extraLarge,
    },
    marginTopAuto: {
      marginTop: 'auto',
    },

    // Right
    marginRight1: {
      marginRight: sizes.extraSmall,
    },
    marginRight2: {
      marginRight: sizes.small,
    },
    marginRight3: {
      marginRight: sizes.base,
    },
    marginRight4: {
      marginRight: sizes.large,
    },
    marginRight5: {
      marginRight: sizes.extraLarge,
    },
    marginRightAuto: {
      marginRight: 'auto',
    },

    // Bottom
    marginBottom1: {
      marginBottom: sizes.extraSmall,
    },
    marginBottom2: {
      marginBottom: sizes.small,
    },
    marginBottom3: {
      marginBottom: sizes.base,
    },
    marginBottom4: {
      marginBottom: sizes.large,
    },
    marginBottom5: {
      marginBottom: sizes.extraLarge,
    },
    marginBottomAuto: {
      marginBottom: 'auto',
    },
  },
};

/********* images **********/
export const images = {
  signInBg,
  emptyAvatar,
  demoImg,
};
