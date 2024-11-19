import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import dayjs from "dayjs";

// Icons
import { IconX, IconFlare } from "@tabler/icons-react-native";

// Images
import BigCircle from "@assets/images/BigCircle.svg";
import WavyLine2 from "@assets/images/wavy-line-2.svg";

// Localization
import { useTranslation } from "react-i18next";

// Amplify Graph Queries
import { getUrl } from "aws-amplify/storage";

// Get User Photos
import { sendSpark } from "@utils/user";
import ImageCache from "@src/components/ImageCache";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Redux Root State
interface RootState {
  auth: {
    user: string;
  };
}

const { height, width } = Dimensions.get("window");

export default function ConnectionProfileScreen({ route, navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Route params
  const { userData } = route.params;
  // Get user ID
  const selectedUser = JSON.parse(userData);
  // Get user ID
  const currentUser = useSelector((state: RootState) => state.auth.user);

  // Constants
  const [userImages, setUserImages] = useState<
    {
      url: string;
    }[]
  >([]);
  const [isSendSparkModalVisible, setIsSendSparkModalVisible] =
    useState<boolean>(false);

  const toggleSendSparkModal = () => {
    setIsSendSparkModalVisible(!isSendSparkModalVisible);
  };

  const closeSendSpark = () => {
    navigation.goBack();
    setTimeout(() => {
      toggleSendSparkModal();
    }, 1000);
  };

  const loadProfile = async () => {
    const images = [];
    const profile = JSON.parse(userData);
    await Promise.all(
      profile.photos.items
        .sort((a, b) => a.photo.sortOrder - b.photo.sortOrder)
        .map(async (photo, index) => {
          const image1URI = await getUrl({
            path: `public/${photo.photo.name}`,
          });
          images.push({
            url: String(image1URI.url),
          });
        })
    );
    setUserImages(images);
  };

  const getUserMetadata = () => {
    const age = dayjs().diff(selectedUser.birthdate, "year");
    const metadata = [];
    metadata.push(age);
    if (selectedUser.gender?.length) metadata.push(selectedUser.gender);
    if (selectedUser.hometown) metadata.push(selectedUser.hometown);
    return metadata.join(" / ");
  };

  useEffect(() => {
    loadProfile();
  }, [userData]);

  const handleSendSpark = async () => {
    const spark = await sendSpark(currentUser, userData);
    console.log("Spark", spark.result);
    if (!spark.result) {
      toggleSendSparkModal();
    }

    if (spark.result) {
    }
  };

  return (
    <View
      testID="ConnectProfile"
      className="h-screen w-screen top-0 left-0 flex flex-col items-center justify-start bg-card relative"
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={isSendSparkModalVisible}
        className="relative"
        onRequestClose={closeSendSpark}
      >
        <View className="w-screen h-screen absolute left-0 top-0 z-0 bg-dark/40"></View>
        <View className="w-full h-full p-5 flex items-center justify-center absolute bottom-0 pb-24 rounded-t-2xl bg-gray z-10">
          <Pressable
            onPress={closeSendSpark}
            className="absolute top-16 right-6 z-30 bg-white/30 rounded-full p-1"
          >
            <IconX width={25} height={25} color="#000" strokeWidth={1} />
          </Pressable>
          <IconFlare width={100} height={100} color="#FFFFFF" />
          <Text
            allowFontScaling={false}
            className="text-white w-full text-center text-[30px] -tracking-widest font-jokkerl  mt-8"
          >
            {t("connection-profile-screen.you-sent-a-spark")}
            {selectedUser.firstName}
          </Text>
        </View>
      </Modal>
      <Pressable
        onPress={() => navigation.goBack()}
        className="w-[35px] h-[35px] absolute top-16 right-6 z-10 rounded-full bg-white/50 flex items-center justify-center"
      >
        <IconX width={30} height={30} color="#000" />
      </Pressable>
      <ScrollView className="relative w-full">
        {userImages.length > 0 && userImages[0]?.url && (
          <ImageCache
            uri={userImages[0].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        {selectedUser.firstName && (
          <View className="w-full p-6">
            <View className="w-full flex flex-row items-center justify-between">
              <Text
                allowFontScaling={false}
                className="text-[36px] font-jokkerl  -tracking-widest"
              >
                {selectedUser.firstName} {selectedUser.lastName.charAt(0)}
              </Text>
              <Pressable
                onPress={() => handleSendSpark()}
                className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full"
              >
                <IconFlare width={50} height={50} color="#000000" />
              </Pressable>
            </View>
            <Text
              allowFontScaling={false}
              className="w-full text-[16px] font-jokkerl "
            >
              {getUserMetadata()}
            </Text>
            {selectedUser.bio && (
              <View className="w-full bg-card p-4 rounded-xl mt-4">
                <Text
                  allowFontScaling={false}
                  className="w-full text-[18px] font-jokkerm mb-2"
                >
                  {t("connection-profile-screen.about")}{" "}
                  {selectedUser.firstName}
                </Text>
                <Text
                  allowFontScaling={false}
                  className="w-full text-[16px] font-jokkerl "
                >
                  {selectedUser.bio}
                </Text>
              </View>
            )}
          </View>
        )}
        {userImages.length > 0 && userImages[1]?.url && (
          <ImageCache
            uri={userImages[1].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        {selectedUser.gender && selectedUser.isSexualOrientationVisible && (
          <View className="w-full px-6 pt-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl mb-8"
              >
                {t("connection-profile-screen.more-about-me")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.how-do-you-indentify")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl "
              >
                {selectedUser.gender}
              </Text>
            </View>
          </View>
        )}
        {selectedUser.languages.items.length > 0 &&
          selectedUser.areLanguagesVisible(
            <View className="w-full px-6 py-4">
              <View className="border-b border-solid border-dark/20 pb-4">
                <Text
                  allowFontScaling={false}
                  className="w-full text-[18px] font-jokkerl mb-2"
                >
                  {t("connection-profile-screen.languages")}
                </Text>
                <Text
                  allowFontScaling={false}
                  className="w-full text-[16px] font-jokkerl "
                >
                  {selectedUser.languages.items
                    .map((language) => language.language.name)
                    .join(", ")}
                </Text>
              </View>
            </View>
          )}
        {selectedUser.height > 0 && selectedUser.isHeightVisible && (
          <View className="w-full px-6 pb-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.height")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl "
              >
                {`${Math.floor(selectedUser.height / 30.48)}'${Math.round(
                  (selectedUser.height % 30.48) / 2.54
                )} (${selectedUser.height}cm)`}
              </Text>
            </View>
          </View>
        )}
        {selectedUser.religion && selectedUser.isReligionVisible && (
          <View className="w-full px-6 pb-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.religion")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl "
              >
                {selectedUser.religion.name}
              </Text>
            </View>
          </View>
        )}
        {selectedUser.tobaccoPreference && (
          <View className="w-full px-6 pb-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.tobacco")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl "
              >
                {selectedUser.tobaccoPreference.name}
              </Text>
            </View>
          </View>
        )}
        {selectedUser.drinkPreference && (
          <View className="w-full px-6 pb-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.drink")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[16px] font-jokkerl "
              >
                {selectedUser.drinkPreference.name}
              </Text>
            </View>
          </View>
        )}
        {userImages.length > 0 && userImages[2]?.url && (
          <ImageCache
            uri={userImages[2].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        {selectedUser.value?.length > 0 && (
          <View className="w-full px-6 py-4 relative h-[500px] flex items-center justify-center">
            <View className="w-screen h-full flex items-center justify-center absolute top-0 left-0">
              <BigCircle width={350} height={350} />
            </View>
            <Text
              allowFontScaling={false}
              className="w-full text-[18px] font-jokkerl mb-2 absolute top-5 left-6"
            >
              {t("connection-profile-screen.what-i-value")}
            </Text>
            <Text
              allowFontScaling={false}
              className="w-full text-[70px] font-jokkerl -tracking-widest text-center"
            >
              {selectedUser.value}
            </Text>
          </View>
        )}
        {userImages.length > 0 && userImages[3]?.url && (
          <ImageCache
            uri={userImages[3].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        {selectedUser.mentalHealth && (
          <View className="w-full px-6 py-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.mental")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[80px] font-jokkerl -tracking-widest text-center"
              >
                {selectedUser.mentalHealth}
              </Text>
            </View>
          </View>
        )}
        {userImages.length > 0 && userImages[4]?.url && (
          <ImageCache
            uri={userImages[4].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        {selectedUser.quality > 0 && (
          <View className="w-full px-6 py-4">
            <View className="border-b border-solid border-dark/20 pb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-[18px] font-jokkerl mb-2"
              >
                {t("connection-profile-screen.qualities")}
              </Text>
              <Text
                allowFontScaling={false}
                className="w-full text-[80px] font-jokkerl -tracking-widest text-center"
              >
                {selectedUser.quality}
              </Text>
            </View>
          </View>
        )}
        {userImages.length > 0 && userImages[5]?.url && (
          <ImageCache
            uri={userImages[5].url}
            style={[{ width: width, height: height * 0.5 }]}
            className="object-cover"
          />
        )}
        <View className="w-full flex items-center justify-center">
          <WavyLine2 width={176} height={100} />
        </View>
      </ScrollView>
    </View>
  );
}
