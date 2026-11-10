import React from "react";
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import CustomButton from "./CustomButton";
import { currentUser } from "../data";

export default function MatchModal({ visible, profile, onClose }) {
  const router = useRouter();
  if (!profile) return null;

  const handleSendMessage = () => {
    onClose();
    setTimeout(() => {
      router.push({
        pathname: "/chat-detail",
        params: { id: profile.id, name: profile.name },
      });
    }, 150);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.matchTitle}>It’s a Match!</Text>
          <Text style={styles.matchSub}>
            You and {profile.name} have liked each other.
          </Text>

          {/* Avatars Overlap */}
          <View style={styles.avatarsRow}>
            <Image source={currentUser.avatar} style={[styles.avatar, styles.avatarLeft]} />
            <View style={styles.heartCircle}>
              <Feather name="heart" size={24} color={colors.white} />
            </View>
            <Image source={profile.photo} style={[styles.avatar, styles.avatarRight]} />
          </View>

          <View style={styles.btnStack}>
            <CustomButton
              title="Send a Message"
              variant="primary"
              icon="send"
              onPress={handleSendMessage}
              style={{ marginBottom: spacing.sm }}
            />
            <CustomButton
              title="Keep Swiping"
              variant="outline"
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(17, 24, 39, 0.88)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
    width: "100%",
    maxWidth: 340,
    ...shadows.lg,
  },
  matchTitle: {
    ...typography.h1,
    fontSize: 34,
    color: colors.primary,
    fontStyle: "italic",
    textAlign: "center",
  },
  matchSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: 6,
    marginBottom: spacing.xl,
  },
  avatarsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
    position: "relative",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: colors.white,
  },
  avatarLeft: {
    marginRight: -16,
  },
  avatarRight: {
    marginLeft: -16,
  },
  heartCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    borderWidth: 3,
    borderColor: colors.white,
  },
  btnStack: {
    width: "100%",
  },
});
