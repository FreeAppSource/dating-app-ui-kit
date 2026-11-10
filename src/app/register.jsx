import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function RegisterScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Gender, 2: Name, 3: Birthday, 4: Hobbies
  const [gender, setGender] = useState("Woman");
  const [interestedIn, setInterestedIn] = useState("Men");
  const [name, setName] = useState("Taylor Reed");
  const [birthYear, setBirthYear] = useState("1999");
  const [selectedHobbies, setSelectedHobbies] = useState([
    "Photography",
    "Travel",
    "Coffee",
  ]);

  const allHobbies = [
    "Photography",
    "Travel",
    "Coffee",
    "Art",
    "Music",
    "Gym",
    "Cooking",
    "Design",
    "Dogs",
    "Hiking",
    "Cinema",
    "Yoga",
  ];

  const toggleHobby = (h) => {
    if (selectedHobbies.includes(h)) {
      setSelectedHobbies(selectedHobbies.filter((x) => x !== h));
    } else {
      setSelectedHobbies([...selectedHobbies, h]);
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      router.replace("/(tabs)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={`Step ${step} of 4`}
        onBack={step > 1 ? () => setStep(step - 1) : null}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Choose gender</Text>
            <Text style={styles.stepSub}>Select your gender and who you want to meet</Text>

            <Text style={styles.fieldLabel}>I am a:</Text>
            <View style={styles.optionsRow}>
              {["Woman", "Man", "Non-binary"].map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[styles.optionPill, gender === g && styles.optionPillActive]}
                  onPress={() => setGender(g)}
                >
                  <Text style={[styles.optionText, gender === g && styles.optionTextActive]}>
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.fieldLabel, { marginTop: spacing.lg }]}>Interested in:</Text>
            <View style={styles.optionsRow}>
              {["Men", "Women", "Everyone"].map((i) => (
                <TouchableOpacity
                  key={i}
                  style={[styles.optionPill, interestedIn === i && styles.optionPillActive]}
                  onPress={() => setInterestedIn(i)}
                >
                  <Text style={[styles.optionText, interestedIn === i && styles.optionTextActive]}>
                    {i}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Enter your name</Text>
            <Text style={styles.stepSub}>
              This name will be visible to users on Dating App.
            </Text>

            <View style={styles.inputContainer}>
              <Feather name="user" size={18} color={colors.primary} style={{ marginRight: 8 }} />
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Taylor Reed"
              />
            </View>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Your Birthday</Text>
            <Text style={styles.stepSub}>
              Access is limited. You must be over 18 to use the app!
            </Text>

            <View style={styles.inputContainer}>
              <Feather name="calendar" size={18} color={colors.primary} style={{ marginRight: 8 }} />
              <TextInput
                style={styles.textInput}
                value={birthYear}
                onChangeText={setBirthYear}
                placeholder="Year (e.g. 1999)"
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        {step === 4 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Select your Passions</Text>
            <Text style={styles.stepSub}>
              Choose 3 or more hobbies to find common ground with matches.
            </Text>

            <View style={styles.hobbiesWrap}>
              {allHobbies.map((h) => {
                const isSelected = selectedHobbies.includes(h);
                return (
                  <TouchableOpacity
                    key={h}
                    style={[styles.hobbyPill, isSelected && styles.hobbyPillActive]}
                    onPress={() => toggleHobby(h)}
                  >
                    <Text style={[styles.hobbyText, isSelected && styles.hobbyTextActive]}>
                      {h}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title={step === 4 ? "Complete Profile" : "Continue"}
          variant="primary"
          onPress={handleNext}
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
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 100,
  },
  stepContainer: {
    marginTop: spacing.md,
  },
  stepTitle: {
    ...typography.h1,
    color: colors.dark,
  },
  stepSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 6,
    marginBottom: spacing.xl,
    lineHeight: 22,
  },
  fieldLabel: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  optionPill: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
  },
  optionTextActive: {
    color: colors.white,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 52,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  hobbiesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  hobbyPill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  hobbyPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  hobbyText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.grayDark,
  },
  hobbyTextActive: {
    color: colors.white,
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
