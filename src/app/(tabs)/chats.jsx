import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import Header from "../../components/Header";
import { chatsList, matchesList } from "../../data";

export default function ChatsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Messages" showBack={false} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Matches Horizontal Header */}
        <Text style={styles.sectionHeader}>New Matches</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.matchesRow}
          contentContainerStyle={{ gap: 14 }}
        >
          {matchesList.map((m) => (
            <TouchableOpacity
              key={m.id}
              style={styles.matchItem}
              onPress={() =>
                router.push({
                  pathname: "/chat-detail",
                  params: { id: m.profile.id, name: m.profile.name },
                })
              }
            >
              <View style={styles.matchAvatarRing}>
                <Image source={m.profile.photo} style={styles.matchAvatar} />
              </View>
              <Text style={styles.matchName} numberOfLines={1}>
                {m.profile.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Conversations List */}
        <Text style={[styles.sectionHeader, { marginTop: spacing.md }]}>Conversations</Text>
        {chatsList.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.chatRow}
            onPress={() =>
              router.push({
                pathname: "/chat-detail",
                params: { id: c.profile.id, name: c.profile.name },
              })
            }
            activeOpacity={0.7}
          >
            <View style={styles.avatarContainer}>
              <Image source={c.profile.photo} style={styles.chatAvatar} />
              {c.online && <View style={styles.onlineBadge} />}
            </View>

            <View style={styles.chatInfo}>
              <View style={styles.nameTimeRow}>
                <Text style={styles.chatName}>{c.profile.name}</Text>
                <Text style={styles.chatTime}>{c.timestamp}</Text>
              </View>
              <Text style={styles.lastMsg} numberOfLines={1}>
                {c.lastMessage}
              </Text>
            </View>

            {c.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{c.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
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
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  matchesRow: {
    marginBottom: spacing.md,
  },
  matchItem: {
    alignItems: "center",
    width: 64,
  },
  matchAvatarRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 2,
  },
  matchAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 28,
  },
  matchName: {
    ...typography.caption,
    color: colors.dark,
    marginTop: 4,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  avatarContainer: {
    position: "relative",
  },
  chatAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  onlineBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: colors.white,
  },
  chatInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  nameTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatName: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  chatTime: {
    ...typography.caption,
    color: colors.gray,
  },
  lastMsg: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  unreadBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
    marginLeft: spacing.sm,
  },
  unreadText: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.white,
  },
});
