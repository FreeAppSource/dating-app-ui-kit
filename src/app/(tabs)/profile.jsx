import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { currentUser } from "../../data";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Profile"
        showBack={false}
        rightIcon="settings"
        onRightPress={() => router.push("/settings")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <Image source={currentUser.avatar} style={styles.avatar} />
            <TouchableOpacity
              style={styles.editBadge}
              onPress={() => router.push("/edit-profile")}
            >
              <Feather name="edit-2" size={14} color={colors.white} />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>{currentUser.name}, {currentUser.age}</Text>
          <Text style={styles.occupation}>{currentUser.occupation}</Text>
          <Text style={styles.location}>{currentUser.location}</Text>
        </View>

        {/* Raise Account to Top Banner (from Sketch Artboard) */}
        <TouchableOpacity
          style={styles.topBanner}
          onPress={() => router.push("/credits-store")}
          activeOpacity={0.85}
        >
          <View style={styles.topIconCircle}>
            <Feather name="trending-up" size={24} color={colors.gold} />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.topBannerTitle}>Raise your account to the top</Text>
            <Text style={styles.topBannerSub}>
              Get up to 10x more profile visits and matches for 24 hours.
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.gold} />
        </TouchableOpacity>

        {/* Credits Balance Card */}
        <View style={styles.creditCard}>
          <View style={styles.creditLeft}>
            <Text style={styles.creditLabel}>Credits Balance</Text>
            <Text style={styles.creditNumber}>{currentUser.creditsBalance} Credits</Text>
            <Text style={styles.creditValue}>Value: ${currentUser.creditsValueUSD}</Text>
          </View>

          <CustomButton
            title="Buy Credits"
            variant="gold"
            size="small"
            icon="plus"
            onPress={() => router.push("/credits-store")}
          />
        </View>

        {/* Menu Links */}
        <View style={styles.menuGroup}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/edit-profile")}
          >
            <Feather name="user" size={18} color={colors.primary} />
            <Text style={styles.menuText}>Edit Profile & Photos</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/filter-modal")}
          >
            <Feather name="sliders" size={18} color={colors.primary} />
            <Text style={styles.menuText}>Discovery Filters</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/credits-store")}
          >
            <Feather name="award" size={18} color={colors.gold} />
            <Text style={styles.menuText}>Credits & Phone Prices</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/settings")}
          >
            <Feather name="settings" size={18} color={colors.primary} />
            <Text style={styles.menuText}>App Settings & Languages</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/login")}
        >
          <Feather name="log-out" size={18} color={colors.danger} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: spacing.sm,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.white,
  },
  name: {
    ...typography.h2,
    color: colors.dark,
  },
  occupation: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  location: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "700",
    marginTop: 4,
  },
  topBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.goldSoft,
    padding: spacing.md,
    borderRadius: radius.md,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  topIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  topBannerTitle: {
    ...typography.bodyLarge,
    fontWeight: "800",
    color: "#92400E",
  },
  topBannerSub: {
    ...typography.caption,
    color: "#B45309",
    marginTop: 2,
  },
  creditCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  creditLeft: {},
  creditLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
  },
  creditNumber: {
    ...typography.h3,
    color: colors.dark,
    marginTop: 2,
  },
  creditValue: {
    ...typography.caption,
    color: colors.success,
    fontWeight: "700",
  },
  menuGroup: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  menuText: {
    flex: 1,
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.dark,
    marginLeft: 12,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dangerSoft,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    marginTop: spacing.lg,
    gap: 8,
  },
  logoutText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.danger,
  },
});
