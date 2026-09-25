/**
 * Airbnb Clone Design Tokens
 * Extracted and calibrated from visual and layout reverse-engineering analysis
 * (docs/reference-analysis.md).
 */

export const tokens = {
  colors: {
    brand: '#FF385C',
    brandHover: '#E00B41',
    textPrimary: '#222222',
    textSecondary: '#717171',
    textMuted: '#6A6A6A',
    bgWhite: '#FFFFFF',
    bgSurface: '#F7F7F7',
    borderLight: '#EBEBEB',
    borderDefault: '#DDDDDD',
    borderDark: '#222222',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '22px',
      title: '26px',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  layout: {
    containerMaxWidth: '1120px',
    headerHeight: '81px',
    galleryHeight: '480px',
    bookingCardWidth: '380px',
    columnGap: '48px',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  shadows: {
    card: '0 6px 16px rgba(0, 0, 0, 0.12)',
    dropdown: '0 2px 16px rgba(0, 0, 0, 0.12)',
    buttonHover: '0 2px 4px rgba(0, 0, 0, 0.18)',
    pill: '0 1px 2px rgba(0, 0, 0, 0.08)',
  },
} as const;

export type DesignTokens = typeof tokens;

