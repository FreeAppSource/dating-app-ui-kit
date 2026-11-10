import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, shadows } from "../theme";

export default function SwipeActionButtons({
  onRewind,
  onNope,
  onSuperLike,
  onLike,
  onBoost,
}) {
  return (
    <View style={styles.container}>
      {/* Rewind */}
      <TouchableOpacity style={[styles.btn, styles.smallBtn]} onPress={onRewind}>
        <Feather name="rotate-ccw" size={18} color="#F59E0B" />
      </TouchableOpacity>

      {/* Nope */}
      <TouchableOpacity style={[styles.btn, styles.largeBtn]} onPress={onNope}>
        <Feather name="x" size={28} color={colors.danger} />
      </TouchableOpacity>

      {/* Super Like */}
      <TouchableOpacity style={[styles.btn, styles.smallBtn]} onPress={onSuperLike}>
        <Feather name="star" size={20} color={colors.superLike} />
      </TouchableOpacity>

      {/* Like */}
      <TouchableOpacity style={[styles.btn, styles.largeBtn]} onPress={onLike}>
        <Feather name="heart" size={28} color={colors.primary} />
      </TouchableOpacity>

      {/* Boost */}
      <TouchableOpacity style={[styles.btn, styles.smallBtn]} onPress={onBoost}>
        <Feather name="zap" size={18} color={colors.boost} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    paddingVertical: 12,
  },
  btn: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  smallBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  largeBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
