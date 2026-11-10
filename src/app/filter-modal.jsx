import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function FilterModalScreen() {
  const router = useRouter();
  const [ageRange, setAgeRange] = useState("20 - 23");
  const [distance, setDistance] = useState("30 km");
  const [genderFilter, setGenderFilter] = useState("Women");
  const [verifiedOnly, setVerifiedOnly] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Discovery Filters</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>I'm interested in</Text>
          <View style={styles.pillsRow}>
            {["Women", "Men", "Everyone"].map((g) => (
              <TouchableOpacity
                key={g}
                style={[styles.pill, genderFilter === g && styles.pillActive]}
                onPress={() => setGenderFilter(g)}
              >
                <Text style={[styles.pillText, genderFilter === g && styles.pillTextActive]}>
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionLabel}>Age Range</Text>
            <Text style={styles.rangeValue}>{ageRange}</Text>
          </View>
          <View style={styles.pillsRow}>
            {["18 - 22", "20 - 23", "24 - 28", "29+"].map((ar) => (
              <TouchableOpacity
                key={ar}
                style={[styles.pill, ageRange === ar && styles.pillActive]}
                onPress={() => setAgeRange(ar)}
              >
                <Text style={[styles.pillText, ageRange === ar && styles.pillTextActive]}>
                  {ar}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionLabel}>Maximum Distance</Text>
            <Text style={styles.rangeValue}>{distance}</Text>
          </View>
          <View style={styles.pillsRow}>
            {["10 km", "30 km", "50 km", "100 km"].map((d) => (
              <TouchableOpacity
                key={d}
                style={[styles.pill, distance === d && styles.pillActive]}
                onPress={() => setDistance(d)}
              >
                <Text style={[styles.pillText, distance === d && styles.pillTextActive]}>
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Additionally</Text>
          <TouchableOpacity
            style={styles.toggleRow}
            onPress={() => setVerifiedOnly(!verifiedOnly)}
          >
            <Text style={styles.toggleText}>Only Verified Profiles</Text>
            <Feather
              name={verifiedOnly ? "check-square" : "square"}
              size={22}
              color={verifiedOnly ? colors.primary : colors.gray}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title="Apply & Show Profiles"
          variant="primary"
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  cancelText: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  title: {
    ...typography.h3,
    color: colors.dark,
  },
  clearText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: 100,
  },
  section: {
    marginBottom: spacing.xl,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  sectionLabel: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  rangeValue: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.primary,
  },
  pillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 6,
  },
  pill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  pillText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.dark,
  },
  pillTextActive: {
    color: colors.white,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 8,
  },
  toggleText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.dark,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
