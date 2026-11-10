import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { matchesList, datingProfiles, profileViewsList } from "../../data";

const { width } = Dimensions.get("window");
const colWidth = (width - spacing.lg * 2 - spacing.md) / 2;

export default function MatchesScreen() {
  const router = useRouter();
  const [subTab, setSubTab] = useState("matches"); // matches | likes | views

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Activity" showBack={false} />

      {/* Segmented Controls (Matches, Likes, Profile Views from Sketch) */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tabBtn, subTab === "matches" && styles.tabBtnActive]}
          onPress={() => setSubTab("matches")}
        >
          <Text style={[styles.tabText, subTab === "matches" && styles.tabTextActive]}>
            Matches ({matchesList.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, subTab === "likes" && styles.tabBtnActive]}
          onPress={() => setSubTab("likes")}
        >
          <Text style={[styles.tabText, subTab === "likes" && styles.tabTextActive]}>
            Likes (18)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, subTab === "views" && styles.tabBtnActive]}
          onPress={() => setSubTab("views")}
        >
          <Text style={[styles.tabText, subTab === "views" && styles.tabTextActive]}>
            Views (14)
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {subTab === "matches" && (
          <View>
            <Text style={styles.sectionHeader}>Your Connections</Text>
            <View style={styles.grid}>
              {matchesList.map((m) => (
                <TouchableOpacity
                  key={m.id}
                  style={styles.matchCard}
                  onPress={() => router.push("/profile-view")}
                  activeOpacity={0.85}
                >
                  <Image source={m.profile.photo} style={styles.matchImg} />
                  <View style={styles.matchOverlay}>
                    <Text style={styles.matchName}>
                      {m.profile.name}, {m.profile.age}
                    </Text>
                    <Text style={styles.matchTime}>Matched {m.matchedDate}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {subTab === "likes" && (
          <View>
            <View style={styles.goldBanner}>
              <View style={styles.goldLeft}>
                <Feather name="heart" size={24} color={colors.primary} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.goldTitle}>18 People Liked You</Text>
                  <Text style={styles.goldSub}>
                    Unlock full profiles instantly with Gold Credits.
                  </Text>
                </View>
              </View>
              <CustomButton
                title="See Who"
                variant="primary"
                size="small"
                onPress={() => router.push("/credits-store")}
              />
            </View>

            <View style={styles.grid}>
              {datingProfiles.map((p, idx) => (
                <TouchableOpacity
                  key={p.id}
                  style={styles.matchCard}
                  onPress={() => router.push("/credits-store")}
                  activeOpacity={0.85}
                >
                  <Image source={p.photo} style={[styles.matchImg, styles.blurImg]} />
                  <View style={styles.lockOverlay}>
                    <Feather name="lock" size={24} color={colors.white} />
                    <Text style={styles.lockText}>Secret Admirer</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {subTab === "views" && (
          <View>
            <Text style={styles.sectionHeader}>Recent Visitors (14 today)</Text>
            {profileViewsList.map((v) => (
              <TouchableOpacity
                key={v.id}
                style={styles.viewRow}
                onPress={() => router.push("/profile-view")}
              >
                <Image source={v.avatar} style={styles.viewAvatar} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.viewName}>{v.name} viewed your profile</Text>
                  <Text style={styles.viewTime}>{v.time}</Text>
                </View>
                <Feather name="chevron-right" size={18} color={colors.gray} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabRow: {
    flexDirection: "row",
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: radius.sm,
  },
  tabBtnActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.gray,
  },
  tabTextActive: {
    color: colors.white,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginVertical: spacing.sm,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  matchCard: {
    width: colWidth,
    height: 220,
    borderRadius: radius.lg,
    overflow: "hidden",
    position: "relative",
    backgroundColor: colors.white,
    ...shadows.sm,
  },
  matchImg: {
    width: "100%",
    height: "100%",
  },
  matchOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(17, 24, 39, 0.75)",
    padding: spacing.sm,
  },
  matchName: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.white,
  },
  matchTime: {
    ...typography.caption,
    color: "rgba(255,255,255,0.75)",
    marginTop: 2,
  },
  goldBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primarySoft,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primaryPastel,
    marginBottom: spacing.md,
  },
  goldLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  goldTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.primary,
  },
  goldSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  blurImg: {
    opacity: 0.25,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(17, 24, 39, 0.4)",
  },
  lockText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.white,
    marginTop: 6,
  },
  viewRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  viewAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  viewName: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
  },
  viewTime: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
});
