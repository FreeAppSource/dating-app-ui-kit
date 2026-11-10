import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import BuyPhoneModal from "../components/BuyPhoneModal";
import { datingProfiles, currentUser } from "../data";

const { width } = Dimensions.get("window");

export default function ProfileViewScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const profile = datingProfiles.find((p) => p.id === id) || datingProfiles[0];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [buyModalVisible, setBuyModalVisible] = useState(false);

  const handleLike = () => {
    Alert.alert("Liked!", `You liked ${profile.name}!`);
  };

  const handleSuperLike = () => {
    Alert.alert("Super Liked!", `You gave ${profile.name} a Super Like!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={profile.name}
        rightIcon="more-vertical"
        onRightPress={() => {}}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Photo Gallery with Indicator Dots */}
        <View style={styles.photoContainer}>
          <Image
            source={profile.photos[activePhotoIdx] || profile.photo}
            style={styles.heroPhoto}
          />

          {/* Dots Indicator */}
          <View style={styles.dotsRow}>
            {profile.photos.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.dot, i === activePhotoIdx && styles.activeDot]}
                onPress={() => setActivePhotoIdx(i)}
              />
            ))}
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                {profile.verified && (
                  <View style={styles.verifiedBadge}>
                    <Feather name="check" size={12} color={colors.white} />
                  </View>
                )}
              </View>
              <Text style={styles.occupation}>
                {profile.occupation} at {profile.company}
              </Text>
            </View>

            <View style={styles.matchBadge}>
              <Text style={styles.matchText}>{profile.matchPercent}%</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <Feather name="map-pin" size={14} color={colors.primary} />
            <Text style={styles.distanceText}>
              {profile.distance} • {profile.city}
            </Text>
          </View>

          {/* Buy Phone Number Feature from Sketch */}
          <View style={styles.buyPhoneBanner}>
            <View style={styles.phoneLeft}>
              <Feather name="phone" size={20} color={colors.gold} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.phoneBannerTitle}>Unlock Direct Phone Number</Text>
                <Text style={styles.phoneBannerSub}>
                  Connect on WhatsApp & Call for {profile.phoneCredits} Credits
                </Text>
              </View>
            </View>
            <CustomButton
              title="Unlock"
              variant="gold"
              size="small"
              onPress={() => setBuyModalVisible(true)}
            />
          </View>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bioText}>{profile.bio}</Text>

          <Text style={styles.sectionTitle}>Passions & Hobbies</Text>
          <View style={styles.hobbiesWrap}>
            {profile.hobbies.map((h, i) => (
              <View key={i} style={styles.hobbyPill}>
                <Text style={styles.hobbyText}>{h}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Buttons */}
      <View style={styles.floatingBar}>
        <TouchableOpacity style={styles.actionCircleNope} onPress={() => router.back()}>
          <Feather name="x" size={26} color={colors.danger} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCircleStar} onPress={handleSuperLike}>
          <Feather name="star" size={24} color={colors.superLike} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCircleLike} onPress={handleLike}>
          <Feather name="heart" size={26} color={colors.white} />
        </TouchableOpacity>
      </View>

      <BuyPhoneModal
        visible={buyModalVisible}
        profile={profile}
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
  scrollContent: {
    paddingBottom: 110,
  },
  photoContainer: {
    width: "100%",
    height: 380,
    position: "relative",
  },
  heroPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dotsRow: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
  infoCard: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    marginTop: -20,
    ...shadows.md,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    ...typography.h1,
    color: colors.dark,
    fontSize: 26,
  },
  verifiedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  occupation: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  matchBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
  },
  matchText: {
    ...typography.bodyMedium,
    fontWeight: "800",
    color: colors.primary,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    marginBottom: spacing.md,
  },
  distanceText: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    fontWeight: "500",
  },
  buyPhoneBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.goldSoft,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  phoneLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  phoneBannerTitle: {
    ...typography.bodyMedium,
    fontWeight: "800",
    color: "#92400E",
  },
  phoneBannerSub: {
    ...typography.caption,
    color: "#B45309",
    marginTop: 2,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
    marginTop: spacing.md,
    marginBottom: 6,
  },
  bioText: {
    ...typography.bodyLarge,
    color: colors.darkMuted,
    lineHeight: 24,
  },
  hobbiesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  hobbyPill: {
    backgroundColor: colors.background,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
  },
  hobbyText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.dark,
  },
  floatingBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionCircleNope: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  actionCircleStar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  actionCircleLike: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.lg,
  },
});
