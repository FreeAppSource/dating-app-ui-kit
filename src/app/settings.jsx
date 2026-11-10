import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";

export default function SettingsScreen() {
  const router = useRouter();
  const [lang, setLang] = useState("English");
  const [langModal, setLangModal] = useState(false);

  const languages = ["English", "Español", "Deutsch", "Français", "Italiano"];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionHeader}>Preferences</Text>

        <TouchableOpacity style={styles.row} onPress={() => setLangModal(true)}>
          <View style={styles.rowLeft}>
            <Feather name="globe" size={20} color={colors.primary} />
            <Text style={styles.rowTitle}>Language</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.rowValue}>{lang}</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/filter-modal")}
        >
          <View style={styles.rowLeft}>
            <Feather name="sliders" size={20} color={colors.primary} />
            <Text style={styles.rowTitle}>Discovery Settings</Text>
          </View>
          <Feather name="chevron-right" size={18} color={colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/credits-store")}
        >
          <View style={styles.rowLeft}>
            <Feather name="award" size={20} color={colors.gold} />
            <Text style={styles.rowTitle}>VIP & Top Users</Text>
          </View>
          <Feather name="chevron-right" size={18} color={colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutRow}
          onPress={() => router.replace("/login")}
        >
          <Feather name="log-out" size={20} color={colors.danger} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Language Modal */}
      <Modal visible={langModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Change Language</Text>
            {languages.map((l) => (
              <TouchableOpacity
                key={l}
                style={styles.langItem}
                onPress={() => {
                  setLang(l);
                  setLangModal(false);
                }}
              >
                <Text style={[styles.langText, lang === l && styles.langTextActive]}>
                  {l}
                </Text>
                {lang === l && <Feather name="check" size={18} color={colors.primary} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
  sectionHeader: {
    ...typography.caption,
    color: colors.gray,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginVertical: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowTitle: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rowValue: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dangerSoft,
    padding: spacing.md,
    borderRadius: radius.md,
    marginTop: spacing.xl,
    gap: 8,
  },
  logoutText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.danger,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    width: "100%",
    maxWidth: 320,
  },
  modalTitle: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
    textAlign: "center",
  },
  langItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  langText: {
    ...typography.bodyLarge,
    color: colors.dark,
  },
  langTextActive: {
    color: colors.primary,
    fontWeight: "700",
  },
});
