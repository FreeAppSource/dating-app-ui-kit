import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { currentUser } from "../data";

export default function EditProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState(currentUser.name);
  const [occupation, setOccupation] = useState(currentUser.occupation);
  const [bio, setBio] = useState(currentUser.bio);
  const [creditsPrice, setCreditsPrice] = useState(`${currentUser.phoneUnlockCredits}`);

  const handleSave = () => {
    Alert.alert("Success", "Profile updated successfully!");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Edit Profile" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarRow}>
          <Image source={currentUser.avatar} style={styles.avatar} />
          <Text style={styles.changePhotoText}>Change Profile Photos</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputBox}>
            <TextInput style={styles.textInput} value={name} onChangeText={setName} />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Occupation / Headline</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={occupation}
              onChangeText={setOccupation}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number Unlock Price (Credits)</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={creditsPrice}
              onChangeText={setCreditsPrice}
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.hint}>
            Half of the credits paid by other users to unlock your number go to your balance!
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bio</Text>
          <View style={[styles.inputBox, styles.textAreaBox]}>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        <CustomButton
          title="Save Changes"
          variant="primary"
          onPress={handleSave}
          style={{ marginTop: spacing.md }}
        />
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
  avatarRow: {
    alignItems: "center",
    marginVertical: spacing.md,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  changePhotoText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: "700",
    marginTop: 6,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 6,
  },
  inputBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 50,
    justifyContent: "center",
  },
  textAreaBox: {
    height: 110,
    paddingVertical: spacing.sm,
  },
  textInput: {
    ...typography.bodyLarge,
    color: colors.dark,
  },
  textArea: {
    height: "100%",
    textAlignVertical: "top",
  },
  hint: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 4,
  },
});
