import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors, typography, spacing } from "../theme";

export default function Header({
  title,
  subtitle,
  showBack = true,
  onBack,
  rightIcon,
  onRightPress,
  rightText,
  light = false,
}) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <View style={[styles.header, light && styles.headerLight]}>
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity
            style={[styles.iconBtn, light && styles.iconBtnLight]}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Feather
              name="chevron-left"
              size={24}
              color={light ? colors.white : colors.dark}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>

      <View style={styles.center}>
        <Text style={[styles.title, light && styles.textLight]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[styles.subtitle, light && styles.textLightMuted]}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.right}>
        {rightIcon ? (
          <TouchableOpacity
            style={[styles.iconBtn, light && styles.iconBtnLight]}
            onPress={onRightPress}
            activeOpacity={0.7}
          >
            <Feather
              name={rightIcon}
              size={20}
              color={light ? colors.white : colors.dark}
            />
          </TouchableOpacity>
        ) : rightText ? (
          <TouchableOpacity onPress={onRightPress}>
            <Text style={styles.rightText}>{rightText}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
  },
  headerLight: {
    backgroundColor: "transparent",
  },
  left: { width: 44, alignItems: "flex-start" },
  center: { flex: 1, alignItems: "center" },
  right: { width: 44, alignItems: "flex-end" },
  title: {
    ...typography.h3,
    color: colors.dark,
  },
  subtitle: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  textLight: { color: colors.white },
  textLightMuted: { color: "rgba(255,255,255,0.75)" },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconBtnLight: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderColor: "transparent",
  },
  rightText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
