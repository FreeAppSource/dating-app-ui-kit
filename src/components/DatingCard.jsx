import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

const { width } = Dimensions.get("window");
const cardWidth = width - spacing.lg * 2;

export default function DatingCard({ profile, onPress, onBuyNumber }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.95}
    >
      <Image source={profile.photo} style={styles.cardImage} />

      {/* Top Overlays */}
      <View style={styles.topBadges}>
        <View style={styles.matchBadge}>
          <Feather name="zap" size={13} color={colors.white} />
          <Text style={styles.matchText}>{profile.matchPercent}% Match</Text>
        </View>

        {profile.phoneCredits ? (
          <TouchableOpacity
            style={styles.creditsBadge}
            onPress={onBuyNumber}
            activeOpacity={0.8}
          >
            <Feather name="phone" size={12} color={colors.gold} />
            <Text style={styles.creditsText}>{profile.phoneCredits} Credits</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Bottom Gradient Overlay */}
      <View style={styles.cardBottom}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{profile.name}, {profile.age}</Text>
          {profile.verified && (
            <View style={styles.verifiedCircle}>
              <Feather name="check" size={12} color={colors.white} />
            </View>
          )}
        </View>

        <View style={styles.metaRow}>
          <Feather name="map-pin" size={13} color="rgba(255,255,255,0.8)" />
          <Text style={styles.distance}>{profile.distance} • {profile.city}</Text>
        </View>

        <Text style={styles.bio} numberOfLines={2}>
          {profile.bio}
        </Text>

        {/* Hobbies / Passions Pills */}
        <View style={styles.hobbiesRow}>
          {profile.hobbies.slice(0, 3).map((h, i) => (
            <View key={i} style={styles.hobbyPill}>
              <Text style={styles.hobbyText}>{h}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: 480,
    borderRadius: radius.xl,
    overflow: "hidden",
    position: "relative",
    backgroundColor: colors.white,
    ...shadows.lg,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topBadges: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matchBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: radius.full,
    gap: 4,
  },
  matchText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.white,
  },
  creditsBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(17, 24, 39, 0.85)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: radius.full,
    gap: 6,
    borderWidth: 1,
    borderColor: colors.gold,
  },
  creditsText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.gold,
  },
  cardBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(17, 24, 39, 0.82)",
    padding: spacing.lg,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  name: {
    ...typography.h1,
    color: colors.white,
    fontSize: 26,
  },
  verifiedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  distance: {
    ...typography.bodyMedium,
    color: "rgba(255,255,255,0.85)",
  },
  bio: {
    ...typography.bodyMedium,
    color: "rgba(255,255,255,0.9)",
    marginTop: 8,
    lineHeight: 20,
  },
  hobbiesRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
  },
  hobbyPill: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  hobbyText: {
    ...typography.caption,
    color: colors.white,
  },
});
