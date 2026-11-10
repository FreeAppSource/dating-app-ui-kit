import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();

  // Authentic 3 Onboarding Slides from Sketch artboards: Onboarding 1, 2, 3
  const slides = [
    {
      title: "Credits Currency",
      priceTag: "1 credit - $0.99",
      description: "In the application, credits are considered currency. For credits, you can buy numbers of other users for communication.",
      icon: "dollar-sign",
      color: colors.gold,
    },
    {
      title: "Buying a Number",
      priceTag: "Earn while you chat",
      description: "You can specify the number of credits for which other users can buy your phone number. Half of the credits from each purchase of your phone number will be credited to your balance.",
      icon: "phone",
      color: colors.primary,
    },
    {
      title: "Top - Users",
      priceTag: "Boost your visibility",
      description: "You can also buy yourself a place in the \"Top\". A place in the top is bought for one day and increases the number of visits to your profile.",
      icon: "award",
      color: colors.boost,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const slide = slides[activeIdx];

  const handleNext = () => {
    if (activeIdx < slides.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      router.push("/login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Brand Header */}
      <View style={styles.header}>
        <View style={styles.heartLogo}>
          <Feather name="heart" size={28} color={colors.white} />
        </View>
        <Text style={styles.appName}>Dating App</Text>
        <Text style={styles.appSub}>Find Meaningful Connections</Text>
      </View>

      {/* Slide Illustration & Content */}
      <View style={styles.slideCard}>
        <View style={[styles.iconCircle, { backgroundColor: `${slide.color}15` }]}>
          <Feather name={slide.icon} size={48} color={slide.color} />
        </View>

        <View style={styles.dotsRow}>
          {slides.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.dot, i === activeIdx && styles.activeDot]}
              onPress={() => setActiveIdx(i)}
            />
          ))}
        </View>

        <Text style={styles.slideTitle}>{slide.title}</Text>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>{slide.priceTag}</Text>
        </View>

        <Text style={styles.slideDesc}>{slide.description}</Text>
      </View>

      {/* Bottom Action Stack */}
      <View style={styles.bottomSection}>
        <CustomButton
          title={activeIdx === slides.length - 1 ? "Get Started" : "Continue"}
          variant="primary"
          onPress={handleNext}
          style={{ marginBottom: spacing.sm }}
        />

        <CustomButton
          title="Sign In"
          variant="outline"
          onPress={() => router.push("/login")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: "center",
    paddingTop: spacing.lg,
  },
  heartLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xs,
    ...shadows.md,
  },
  appName: {
    ...typography.h1,
    color: colors.dark,
    fontSize: 28,
  },
  appSub: {
    ...typography.caption,
    color: colors.gray,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  slideCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
  slideTitle: {
    ...typography.h2,
    color: colors.dark,
    textAlign: "center",
  },
  priceBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.full,
    marginVertical: spacing.sm,
  },
  priceText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.primary,
  },
  slideDesc: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: spacing.sm,
  },
  bottomSection: {
    paddingBottom: spacing.xl,
  },
});
