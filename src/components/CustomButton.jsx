import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

export default function CustomButton({
  title,
  onPress,
  variant = "primary", // primary | secondary | outline | text | gold
  size = "large",
  icon,
  iconRight,
  disabled = false,
  loading = false,
  style,
  textStyle,
}) {
  const getButtonStyles = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryButton;
      case "outline":
        return styles.outlineButton;
      case "gold":
        return styles.goldButton;
      case "text":
        return styles.textButton;
      case "primary":
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryText;
      case "outline":
        return styles.outlineText;
      case "gold":
        return styles.goldText;
      case "text":
        return styles.textVariantText;
      case "primary":
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.base,
        getButtonStyles(),
        size === "small" ? styles.small : styles.large,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" ? colors.primary : colors.white}
          size="small"
        />
      ) : (
        <>
          {icon && (
            <Feather
              name={icon}
              size={18}
              color={variant === "outline" ? colors.primary : colors.white}
              style={{ marginRight: 8 }}
            />
          )}
          <Text style={[styles.baseText, getTextStyles(), textStyle]}>
            {title}
          </Text>
          {iconRight && (
            <Feather
              name={iconRight}
              size={18}
              color={variant === "outline" ? colors.primary : colors.white}
              style={{ marginLeft: 8 }}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
  },
  large: {
    height: 52,
    paddingHorizontal: spacing.lg,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: radius.sm,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },
  secondaryButton: {
    backgroundColor: colors.dark,
    ...shadows.sm,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  goldButton: {
    backgroundColor: colors.gold,
    ...shadows.sm,
  },
  textButton: {
    backgroundColor: "transparent",
  },
  baseText: {
    fontWeight: "700",
  },
  primaryText: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.white,
  },
  secondaryText: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.white,
  },
  outlineText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
  goldText: {
    ...typography.bodyLarge,
    fontWeight: "800",
    color: colors.white,
  },
  textVariantText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});
