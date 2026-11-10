import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import DatingCard from "../../components/DatingCard";
import SwipeActionButtons from "../../components/SwipeActionButtons";
import MatchModal from "../../components/MatchModal";
import BuyPhoneModal from "../../components/BuyPhoneModal";
import { datingProfiles, topUsers, currentUser } from "../../data";

export default function DiscoverScreen() {
  const router = useRouter();
  const [profiles, setProfiles] = useState(datingProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchModalVisible, setMatchModalVisible] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState(null);
  const [buyModalVisible, setBuyModalVisible] = useState(false);

  const currentProfile = profiles[currentIndex] || profiles[0];

  const handleNextCard = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const handleLike = () => {
    // 50% chance to trigger match modal
    if (currentIndex % 2 === 0) {
      setMatchedProfile(currentProfile);
      setMatchModalVisible(true);
    }
    handleNextCard();
  };

  const handleNope = () => {
    handleNextCard();
  };

  const handleSuperLike = () => {
    Alert.alert("Super Liked!", `You gave ${currentProfile.name} a Super Like!`);
    handleNextCard();
  };

  const handleRewind = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      Alert.alert("Rewind", "You are at the first profile in your deck.");
    }
  };

  const handleBoost = () => {
    router.push("/credits-store");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.creditsPill}
          onPress={() => router.push("/credits-store")}
          activeOpacity={0.8}
        >
          <Feather name="award" size={14} color={colors.gold} />
          <Text style={styles.creditsText}>{currentUser.creditsBalance} Credits</Text>
        </TouchableOpacity>

        <View style={styles.brandTitle}>
          <Feather name="heart" size={18} color={colors.primary} />
          <Text style={styles.brandText}>Dating App</Text>
        </View>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => router.push("/filter-modal")}
          activeOpacity={0.7}
        >
          <Feather name="sliders" size={20} color={colors.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Users Carousel (from Sketch Artboard: Top Users) */}
        <View style={styles.topUsersSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12, paddingHorizontal: spacing.lg }}
          >
            {topUsers.map((u) => (
              <TouchableOpacity
                key={u.id}
                style={styles.topUserItem}
                onPress={() => router.push("/profile-view")}
              >
                <View style={styles.topUserRing}>
                  <Image source={u.avatar} style={styles.topUserAvatar} />
                  <View style={styles.topBadge}>
                    <Text style={styles.topBadgeText}>TOP</Text>
                  </View>
                </View>
                <Text style={styles.topUserName} numberOfLines={1}>
                  {u.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Swiping Card */}
        <View style={styles.cardContainer}>
          <DatingCard
            profile={currentProfile}
            onPress={() => router.push("/profile-view")}
            onBuyNumber={() => setBuyModalVisible(true)}
          />
        </View>

        {/* Action Controls */}
        <SwipeActionButtons
          onRewind={handleRewind}
          onNope={handleNope}
          onSuperLike={handleSuperLike}
          onLike={handleLike}
          onBoost={handleBoost}
        />
      </ScrollView>

      {/* Match Celebration Modal */}
      <MatchModal
        visible={matchModalVisible}
        profile={matchedProfile}
        onClose={() => setMatchModalVisible(false)}
      />

      {/* Buy Phone Number Modal */}
      <BuyPhoneModal
        visible={buyModalVisible}
        profile={currentProfile}
        userCredits={currentUser.creditsBalance}
        onClose={() => setBuyModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  creditsPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  creditsText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.dark,
  },
  brandTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  brandText: {
    ...typography.h3,
    color: colors.dark,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  scrollContent: {
    paddingBottom: spacing.lg,
    alignItems: "center",
  },
  topUsersSection: {
    paddingVertical: spacing.xs,
    width: "100%",
  },
  topUserItem: {
    alignItems: "center",
    width: 62,
  },
  topUserRing: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: colors.gold,
    padding: 2,
    position: "relative",
  },
  topUserAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 27,
  },
  topBadge: {
    position: "absolute",
    bottom: -2,
    alignSelf: "center",
    backgroundColor: colors.gold,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  topBadgeText: {
    fontSize: 8,
    fontWeight: "900",
    color: colors.white,
  },
  topUserName: {
    ...typography.caption,
    color: colors.dark,
    marginTop: 6,
  },
  cardContainer: {
    marginVertical: spacing.sm,
  },
});
