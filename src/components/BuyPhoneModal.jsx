import React from "react";
import { View, Text, StyleSheet, Modal, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import CustomButton from "./CustomButton";

export default function BuyPhoneModal({ visible, profile, userCredits, onClose }) {
  if (!profile) return null;

  const required = profile.phoneCredits || 5;
  const canAfford = userCredits >= required;

  const handlePurchase = () => {
    if (canAfford) {
      Alert.alert(
        "Phone Number Unlocked!",
        `${profile.name}'s phone number is +1 (555) 392-1084. Half of your credits were credited to their account.`,
        [{ text: "Call or Message", onPress: onClose }]
      );
    } else {
      Alert.alert(
        "Insufficient Credits",
        `You need ${required} credits to unlock this number. You currently have ${userCredits} credits.`,
        [{ text: "OK" }]
      );
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <View style={styles.iconCircle}>
            <Feather name="phone-call" size={32} color={colors.gold} />
          </View>

          <Text style={styles.title}>Unlock Phone Number</Text>
          <Text style={styles.desc}>
            You can buy {profile.name}’s phone number for {required} credits. Half of the credits from this purchase will be directly credited to their balance.
          </Text>

          <View style={styles.creditBox}>
            <View>
              <Text style={styles.creditLabel}>YOUR BALANCE</Text>
              <Text style={styles.creditValue}>{userCredits} Credits</Text>
            </View>
            <View style={styles.requiredBadge}>
              <Text style={styles.requiredText}>Cost: {required} Credits</Text>
            </View>
          </View>

          <View style={styles.btnRow}>
            <CustomButton
              title={`Buy for ${required} Credits`}
              variant="gold"
              icon="unlock"
              onPress={handlePurchase}
              style={{ flex: 1 }}
            />
          </View>
          <CustomButton
            title="Cancel"
            variant="text"
            onPress={onClose}
            style={{ marginTop: spacing.sm }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(17, 24, 39, 0.7)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: colors.white,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.goldSoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.dark,
  },
  desc: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 22,
    paddingHorizontal: spacing.sm,
  },
  creditBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.md,
    width: "100%",
    marginVertical: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  creditLabel: {
    ...typography.caption,
    color: colors.gray,
  },
  creditValue: {
    ...typography.h3,
    color: colors.dark,
  },
  requiredBadge: {
    backgroundColor: colors.gold,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.xs,
  },
  requiredText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.white,
  },
  btnRow: {
    width: "100%",
  },
});
