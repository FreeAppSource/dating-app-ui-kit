// Dating App UI Kit - Theme & Design Tokens
// Extracted from Sketch (dating-app-ui-kit-artem-osyadliy.sketch)

export const colors = {
  primary: "#FD3A73",        // Signature Dating Pink / Magenta
  primaryDark: "#E0285E",
  primarySoft: "#FFF0F4",
  primaryPastel: "#FDE2EA",
  secondary: "#FF6B6B",      // Coral
  superLike: "#2563EB",      // Electric Blue Star
  superLikeSoft: "#EFF6FF",
  boost: "#8B5CF6",          // Purple Lightning
  boostSoft: "#F5F3FF",
  gold: "#F59E0B",           // VIP / Credits Gold
  goldSoft: "#FEF3C7",
  success: "#10B981",        // Like Green
  successSoft: "#ECFDF5",
  danger: "#EF4444",         // Nope Red
  dangerSoft: "#FEE2E2",
  dark: "#111827",           // Slate / Black
  darkMuted: "#1F2937",
  gray: "#6B7280",           // Neutral text
  grayLight: "#9CA3AF",      // Placeholders
  border: "#E5E7EB",         // Dividers
  card: "#FFFFFF",
  background: "#F9FAFB",
  white: "#FFFFFF",
};

export const typography = {
  h1: { fontSize: 32, fontWeight: "800", lineHeight: 38 },
  h2: { fontSize: 24, fontWeight: "700", lineHeight: 30 },
  h3: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
  h4: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  bodyLarge: { fontSize: 16, fontWeight: "400", lineHeight: 24 },
  bodyMedium: { fontSize: 14, fontWeight: "400", lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
  caption: { fontSize: 11, fontWeight: "600", lineHeight: 14 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#FD3A73",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
};
