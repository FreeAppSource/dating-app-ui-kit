import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function ForgotPasswordScreen() {
  const router = useRouter();

  // Step 1: Enter Email/Phone (Password recovery)
  // Step 2: Enter 4-digit Code (Enter Code)
  // Step 3: Set New Password (Password recovery 4/5)
  const [step, setStep] = useState(1);
  const [emailOrPhone, setEmailOrPhone] = useState("taylor.reed@example.com");
  const [code, setCode] = useState(["4", "8", "1", "9"]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      Alert.alert(
        "Password Reset Successful!",
        "Your password has been securely updated. Please sign in with your new credentials.",
        [{ text: "Sign In", onPress: () => router.replace("/login") }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Top Bar */}
          <View style={styles.navBar}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => (step > 1 ? setStep(step - 1) : router.back())}
            >
              <Feather name="arrow-left" size={22} color={colors.dark} />
            </TouchableOpacity>
            <Text style={styles.navTitle}>
              {step === 1 ? "Password Recovery" : step === 2 ? "Enter Code" : "New Password"}
            </Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Step 1: Recovery method matching Artboards "Password recovery" */}
          {step === 1 && (
            <View style={styles.content}>
              <View style={styles.iconCircle}>
                <Feather name="lock" size={32} color={colors.primary} />
              </View>

              <Text style={styles.heading}>Forgot Password?</Text>
              <Text style={styles.subheading}>
                Enter your registered phone number or email address to receive a 4-digit recovery code.
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email or Phone Number</Text>
                <View style={styles.inputContainer}>
                  <Feather name="mail" size={18} color={colors.gray} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                    placeholder="Enter email or phone"
                    placeholderTextColor={colors.gray}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <CustomButton
                title="Send Code"
                variant="primary"
                onPress={handleNext}
                style={{ marginTop: spacing.md }}
              />
            </View>
          )}

          {/* Step 2: Verification Code matching Artboard "Enter Code" */}
          {step === 2 && (
            <View style={styles.content}>
              <View style={styles.iconCircle}>
                <Feather name="shield" size={32} color={colors.primary} />
              </View>

              <Text style={styles.heading}>Verification Code</Text>
              <Text style={styles.subheading}>
                We sent a 4-digit verification code to{"\n"}
                <Text style={{ color: colors.dark, fontWeight: "700" }}>{emailOrPhone}</Text>
              </Text>

              {/* 4 Digit Boxes */}
              <View style={styles.codeRow}>
                {code.map((digit, i) => (
                  <View key={i} style={styles.codeBox}>
                    <Text style={styles.codeDigit}>{digit}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity style={styles.resendRow}>
                <Text style={{ color: colors.gray, fontSize: 13 }}>Didn't receive code? </Text>
                <Text style={{ color: colors.primary, fontSize: 13, fontWeight: "700" }}>
                  Resend (45s)
                </Text>
              </TouchableOpacity>

              <CustomButton
                title="Verify Code"
                variant="primary"
                onPress={handleNext}
                style={{ marginTop: spacing.md }}
              />
            </View>
          )}

          {/* Step 3: New Password matching Artboard "Password recovery 5" */}
          {step === 3 && (
            <View style={styles.content}>
              <View style={styles.iconCircle}>
                <Feather name="check-circle" size={32} color={colors.primary} />
              </View>

              <Text style={styles.heading}>Reset Password</Text>
              <Text style={styles.subheading}>
                Please enter a strong new password that you haven't used before.
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>New Password</Text>
                <View style={styles.inputContainer}>
                  <Feather name="lock" size={18} color={colors.gray} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="Enter new password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Feather
                      name={showPassword ? "eye" : "eye-off"}
                      size={18}
                      color={colors.gray}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm New Password</Text>
                <View style={styles.inputContainer}>
                  <Feather name="lock" size={18} color={colors.gray} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm new password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={!showPassword}
                  />
                </View>
              </View>

              <CustomButton
                title="Save & Sign In"
                variant="primary"
                onPress={handleNext}
                style={{ marginTop: spacing.md }}
              />
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    flexGrow: 1,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  navTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  content: {
    alignItems: "center",
    marginTop: spacing.xl,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  heading: {
    ...typography.h1,
    color: colors.dark,
    textAlign: "center",
    marginBottom: 6,
  },
  subheading: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  inputGroup: {
    width: "100%",
    marginBottom: spacing.md,
  },
  label: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 50,
  },
  icon: {
    marginRight: spacing.sm,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  codeRow: {
    flexDirection: "row",
    gap: 12,
    marginVertical: spacing.lg,
  },
  codeBox: {
    width: 58,
    height: 58,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  codeDigit: {
    ...typography.h1,
    color: colors.dark,
  },
  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
});
