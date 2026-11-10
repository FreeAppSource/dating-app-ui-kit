import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import { datingProfiles } from "../data";

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id, name } = useLocalSearchParams();
  const profile = datingProfiles.find((p) => p.id === id) || datingProfiles[0];

  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey Taylor! Loved your photography shots!", fromMe: false, time: "2:40 PM" },
    { id: "2", text: "Thank you so much Jessica! Do you shoot film as well?", fromMe: true, time: "2:42 PM" },
    { id: "3", text: "Yes! 35mm on vintage Minolta. We should go shooting together sometime!", fromMe: false, time: "2:45 PM" },
  ]);

  const handleSend = () => {
    if (!inputMsg.trim()) return;
    const newMsg = {
      id: `${Date.now()}`,
      text: inputMsg,
      fromMe: true,
      time: "Just now",
    };
    setMessages([...messages, newMsg]);
    setInputMsg("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={profile.name}
        subtitle={profile.occupation}
        rightIcon="phone"
        onRightPress={() => router.push("/profile-view")}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Match Banner Timestamp from Sketch */}
          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>Matched on 27 December</Text>
          </View>

          {/* Icebreaker Prompt from Sketch */}
          <View style={styles.icebreakerCard}>
            <Feather name="help-circle" size={18} color={colors.primary} />
            <Text style={styles.icebreakerText}>
              Icebreaker: "What's the most spontaneous road trip you've ever taken?"
            </Text>
          </View>

          {/* Messages */}
          {messages.map((m) => (
            <View
              key={m.id}
              style={[
                styles.bubbleWrapper,
                m.fromMe ? styles.bubbleWrapperRight : styles.bubbleWrapperLeft,
              ]}
            >
              <View
                style={[
                  styles.bubble,
                  m.fromMe ? styles.bubbleRight : styles.bubbleLeft,
                ]}
              >
                <Text
                  style={[
                    styles.msgText,
                    m.fromMe ? styles.msgTextRight : styles.msgTextLeft,
                  ]}
                >
                  {m.text}
                </Text>
                <Text
                  style={[
                    styles.msgTime,
                    m.fromMe ? styles.timeRight : styles.timeLeft,
                  ]}
                >
                  {m.time}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.attachBtn}>
            <Feather name="camera" size={20} color={colors.primary} />
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            value={inputMsg}
            onChangeText={setInputMsg}
            placeholder="Write a message..."
            placeholderTextColor={colors.grayLight}
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
            <Feather name="send" size={18} color={colors.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  dateBadge: {
    alignSelf: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.sm,
  },
  dateText: {
    ...typography.caption,
    color: colors.gray,
  },
  icebreakerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    padding: spacing.md,
    borderRadius: radius.md,
    marginVertical: spacing.md,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.primaryPastel,
  },
  icebreakerText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primaryDark,
    flex: 1,
    lineHeight: 18,
  },
  bubbleWrapper: {
    marginVertical: 4,
    flexDirection: "row",
  },
  bubbleWrapperLeft: {
    justifyContent: "flex-start",
  },
  bubbleWrapperRight: {
    justifyContent: "flex-end",
  },
  bubble: {
    maxWidth: "80%",
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  bubbleLeft: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomLeftRadius: 4,
  },
  bubbleRight: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  msgText: {
    ...typography.bodyMedium,
    lineHeight: 20,
  },
  msgTextLeft: {
    color: colors.dark,
  },
  msgTextRight: {
    color: colors.white,
  },
  msgTime: {
    fontSize: 9,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  timeLeft: {
    color: colors.gray,
  },
  timeRight: {
    color: "rgba(255,255,255,0.75)",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  attachBtn: {
    padding: 8,
  },
  textInput: {
    flex: 1,
    ...typography.bodyMedium,
    backgroundColor: colors.background,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    height: 42,
    marginHorizontal: spacing.sm,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
