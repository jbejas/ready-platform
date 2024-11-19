import Text from "@components/DynamicText";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { Pressable, View } from "react-native";

// Set Redux
import { convertHeightToInternationalFormat } from "@src/utils/user";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function AboutYouScreen({ navigation }) {
  // Get user state
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));
  const { t } = useTranslation();

  return (
    <SafeAreaComponent testID="Help" scrollable relative>
      <View className="w-full pb-40">
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("GenderScreen", {
                isEditing: true,
                existingValue: user.gender,
              })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              How do you prefer to identify?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.gender}{" "}
              {user?.sexualOrientation ? `/ ${user.sexualOrientation}` : ""}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("GenderPreferenceScreen", {
                isEditing: true,
                existingValues: user?.genderPreferences,
              })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Who are you open to dating?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.genderPreferences?.replaceAll(",", ", ")}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() => {
              navigation.navigate("EthnicityScreen", {
                isEditing: true,
              });
            }}
          >
            <Text className="text-[18px] font-jokkerr">
              Which ethnicity best describes you?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.ethnicity.items
                .map((item) => item.ethnicity.name)
                .join(", ")}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() => {
              navigation.navigate("LanguagesScreen", {
                isEditing: true,
              });
            }}
          >
            <Text className="text-[18px] font-jokkerr">
              What languages do you speak?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.languages.items
                .map((item) => item.language.name)
                .join(", ")}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("StarSignScreen", {
                isEditing: true,
              })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              What's your star sign?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.starSign}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("LocationScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Where are you located?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user.location}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("HeightScreen", {
                isEditing: true,
              })
            }
          >
            <Text className="text-[18px] font-jokkerr">How tall are you?</Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.height !== 0 &&
                convertHeightToInternationalFormat(user.height)}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("WantKidsScreen", {
                isEditing: true,
              })
            }
          >
            <Text className="text-[18px] font-jokkerr">Do you want kids?</Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.wantChildrenStatus}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("ReligionScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              What are your religious beliefs?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.religion?.name}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("HometownScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Where did you grow up?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.hometown}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("SchoolScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              {t("school-screen.title")}
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.school}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("EducationScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              {t("education-screen.title")}
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.educationLevel}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("TobaccoScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Do you smoke tobacco?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.tobaccoPreference}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("DrugsScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">Do you do drugs?</Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.drugPreference}
            </Text>
          </Pressable>
        </View>
        <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("AlcoholScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Do you drink alcohol?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.drinkPreference}
            </Text>
          </Pressable>
        </View>
        {/* <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("ValueSetupScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              Which value is most important to you?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">{user?.value}</Text>
          </Pressable>
        </View> */}
        {/* <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() => {
              navigation.navigate("MentalHealthScreen", {
                isEditing: true,
              });
            }}
          >
            <Text className="text-[18px] font-jokkerr">
              How do you take care of your mental health?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.mentalHealth}
            </Text>
          </Pressable>
        </View> */}
        {/* <View className="w-full flex flex-col items-center justify-start border-t border-solid border-dark/20 py-4">
          <Pressable
            className="w-full"
            onPress={() =>
              navigation.navigate("QualityScreen", { isEditing: true })
            }
          >
            <Text className="text-[18px] font-jokkerr">
              What quality are wortking on developing?
            </Text>
            <Text className="text-[16px] font-jokkerl mt-2">
              {user?.quality}
            </Text>
          </Pressable>
        </View> */}
      </View>
    </SafeAreaComponent>
  );
}
