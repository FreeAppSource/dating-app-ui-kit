import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { creditsPackages, currentUser } from "../data";

export default function CreditsStoreScreen() {
  const handleBuyPackage = (pkg) => {
    Alert.alert("Success", `Purchased ${pkg.credits} Credits for ${pkg.price}!`);
  };

  const handleRaiseTop = () => {
    Alert.alert(
      "Raise to Top",
      "Placed your account in Top Users for 24 hours! Expect an influx of new profile visits.",
      [{ text: "Awesome!" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Credits Store" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Your Credits Balance</Text>
          <Text style={styles.balanceNumber}>{currentUser.creditsBalance} Credits</Text>
          <Text style={styles.balanceSub}>1 Credit = $0.99 USD</Text>
        </View>

        {/* Raise Account to Top (Sketch Artboard Feature) */}
        <View style={styles.boostCard}>
          <View style={styles.boostHeader}>
            <View style={styles.goldBadge}>
              <Feather name="award" size={14} color={colors.white} />
              <Text style={styles.goldBadgeText}>VIP TOP</Text>
            </View>
            <Text style={styles.boostCost}>10 Credits / Day</Text>
          </View>

          <Text style={styles.boostTitle}>Raise your account to the top</Text>
          <Text style={styles.boostDesc}>
            A place in the top is bought for one day and increases the number of visits to your profile exponentially.
          </Text>

          <CustomButton
            title="Activate Top Spot (10 Credits)"
            variant="gold"
            icon="zap"
            onPress={handleRaiseTop}
            style={{ marginTop: spacing.md }}
          />
        </View>

        {/* Credit Packages */}
        <Text style={styles.sectionTitle}>Buy Credits</Text>

        {creditsPackages.map((pkg) => (
          <View key={pkg.id} style={[styles.packageCard, pkg.popular && styles.packagePopular]}>
            {pkg.popular && (
              <View style={styles.popBadge}>
                <Text style={styles.popBadgeText}>MOST POPULAR</Text>
              </View>
            )}

            <View style={styles.pkgRow}>
              <View>
                <Text style={styles.pkgCredits}>{pkg.credits} Credits</Text>
                <Text style={styles.pkgSave}>{pkg.saveText}</Text>
              </View>

              <CustomButton
                title={pkg.price}
                variant={pkg.popular ? "primary" : "outline"}
                size="small"
                onPress={() => handleBuyPackage(pkg)}
              />
            </View>
          </View>
        ))}
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
  balanceCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  balanceLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
  },
  balanceNumber: {
    ...typography.h1,
    fontSize: 36,
    color: colors.dark,
    marginVertical: 4,
  },
  balanceSub: {
    ...typography.caption,
    color: colors.gold,
    fontWeight: "700",
  },
  boostCard: {
    backgroundColor: colors.goldSoft,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: "#FDE68A",
    marginVertical: spacing.lg,
  },
  boostHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  goldBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gold,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.xs,
    gap: 4,
  },
  goldBadgeText: {
    ...typography.caption,
    fontWeight: "900",
    color: colors.white,
  },
  boostCost: {
    ...typography.caption,
    fontWeight: "800",
    color: "#92400E",
  },
  boostTitle: {
    ...typography.h3,
    color: "#92400E",
    marginTop: 6,
  },
  boostDesc: {
    ...typography.bodyMedium,
    color: "#B45309",
    marginTop: 4,
    lineHeight: 20,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
  },
  packageCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
    position: "relative",
  },
  packagePopular: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  popBadge: {
    position: "absolute",
    top: -10,
    left: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  popBadgeText: {
    fontSize: 9,
    fontWeight: "900",
    color: colors.white,
  },
  pkgRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pkgCredits: {
    ...typography.h3,
    color: colors.dark,
  },
  pkgSave: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "700",
  },
});
