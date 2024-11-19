import DynamicButton from "@components/DynamicButton/DynamicButton";
import SafeAreaComponent from "@components/SafeAreaComponent/SafeAreaComponent";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import dayjs from "dayjs";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAnalytics } from "@segment/analytics-react-native";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@graphql/queries";
import { ListPromptCategoriesQuery, ListPromptsQuery } from "@src/api/index";
import { updateUser } from "@utils/amplifyUtils";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@store/auth/authSlice";
import {
  IconCircleMinus,
  IconCirclePlus,
  IconX,
} from "@tabler/icons-react-native";
import { useTranslation } from "react-i18next";
import LoadingFullPage from "@src/components/LoadingFullPage";
import UserPhotoUpload from "@src/components/UserPhotoUpload";

// Define the props type for your navigation stack
type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

// Define the state structure
interface RootState {
  auth: {
    user: string;
  };
}

export default function MyProfileScreen({ route, navigation }: Props) {
  // Mount Localization
  const { t } = useTranslation();
  // Mount Redux dispatch
  const dispatch = useDispatch();
  // Segment
  const { track } = useAnalytics();
  // Mount Graphql API
  const API = generateClient();
  // Router params
  const { isOnboarding } = route.params;

  // Get user
  const user = JSON.parse(useSelector((state: RootState) => state.auth.user));

  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  useState<boolean>(false);
  const [modalPromptResponseVisible, setModalPromptResponseVisible] =
    useState<boolean>(false);
  const [promptCategories, setPromptsCategories] = useState<
    { id: string; name: string; isActive: boolean }[]
  >([]);
  const [promptCategory, setPromptCategory] = useState<string>("");
  const [promptResponse, setPromptResponse] = useState<string>("");
  const [prompts, setPrompts] = useState<
    { id: string; promptCategory: string; name: string; isActive: boolean }[]
  >([]);
  const [userPromptsList, setUserPromptsList] = useState<
    { name: string; response: string }[]
  >([
    { name: "", response: "" },
    { name: "", response: "" },
    { name: "", response: "" },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [promptPosition, setPromptPosition] = useState<number | null>(null);
  const [promptIndex, setPromptIndex] = useState<number | null>(null);
  const [isEditingPrompt, setIsEditingPrompt] = useState<boolean>(false);
  const [editPromptIndex, setEditPromptIndex] = useState<number | null>(null);
  const [completeProfileModalVisible, setCompleteProfileModalVisible] =
    useState<boolean>(false);

  const closePromptsModal = () => {
    setModalVisible(!modalVisible);
  };

  const togglePromptsModal = (promptPosition) => {
    setPromptPosition(promptPosition);
    setModalVisible(!modalVisible);
  };

  const togglePromptResponseModal = () => {
    if (!userPromptsList[promptPosition].response) {
      removePrompt(promptPosition);
    }
    setPromptPosition(promptPosition);
    setModalPromptResponseVisible(!modalPromptResponseVisible);
  };

  const setPrompt = (promptToAdd, index) => {
    let newPrompt = [...userPromptsList];
    newPrompt[promptPosition] = { ...promptToAdd };
    setUserPromptsList(newPrompt);
    setPromptIndex(index);
  };

  const addPrompt = () => {
    setModalVisible(!modalVisible);
    setTimeout(() => {
      setPromptIndex(-1);
      setPromptResponse("");
      setModalPromptResponseVisible(!modalPromptResponseVisible);
    }, 300);
  };

  const addResponse = () => {
    let newPrompt = [...userPromptsList];
    newPrompt[promptPosition].response = promptResponse;
    setUserPromptsList(newPrompt);
    setModalPromptResponseVisible(!modalPromptResponseVisible);
    savePrompts(newPrompt);
    setPromptIndex(-1);
    setPromptResponse("");
  };

  const removePrompt = (promptToRemove) => {
    let newPrompt = [...userPromptsList];
    newPrompt[promptToRemove] = {
      name: "",
      response: "",
    };
    setUserPromptsList(newPrompt);
    savePrompts(newPrompt);
  };

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const cameraRollStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (
          cameraRollStatus.status !== "granted" ||
          cameraStatus.status !== "granted"
        ) {
          alert("Sorry, we need these permissions to make this work!");
        }
      }
    })();
  }, []);

  const getPromptsCategories = async () => {
    const allPromptCategories = await API.graphql<
      GraphQLQuery<ListPromptCategoriesQuery>
    >({
      query: queries.listPromptCategories,
    });
    setPromptsCategories(
      allPromptCategories.data.listPromptCategories.items.map((item) => ({
        id: item.id || "",
        name: item.name,
        isActive: item.isActive,
      }))
    );
    setPromptCategory(
      allPromptCategories.data.listPromptCategories.items[0].id
    );
  };

  useEffect(() => {
    getPromptsCategories();
  }, []);

  const getPrompts = async () => {
    const allPrompts = await API.graphql<GraphQLQuery<ListPromptsQuery>>({
      query: queries.listPrompts,
    });
    setPrompts(
      allPrompts.data.listPrompts.items.map((item) => ({
        id: item.id || "",
        name: item.prompt,
        promptCategory: item.promptCategoryID,
        isActive: item.isActive,
      }))
    );
  };

  useEffect(() => {
    getPrompts();
  }, []);

  const savePrompts = async (newPrompt) => {
    try {
      const processedPrompts = JSON.stringify(newPrompt);
      const updatedUser = await updateUser(user.id, {
        prompts: processedPrompts,
      });
      await dispatch(setUser(updatedUser));
    } catch (error) {
      console.log("Error saving prompts", error);
    }
  };

  const parsePrompts = async () => {
    let parsedPrompts;
    if (!user.prompts) {
      parsedPrompts = [
        { name: "", response: "" },
        { name: "", response: "" },
        { name: "", response: "" },
      ];
    } else {
      parsedPrompts = JSON.parse(user.prompts);
    }
    setUserPromptsList(parsedPrompts);
  };

  useEffect(() => {
    parsePrompts();
  }, []);

  useEffect(() => {
    if (isOnboarding) {
      navigation.setOptions({ headerShown: false });
    }
  }, [navigation]);

  const goToYouScreen = async () => {
    try {
      if (
        !userPromptsList ||
        !userPromptsList.some((prompt) => prompt.name !== "")
      ) {
        setCompleteProfileModalVisible(true);
        return;
      }
      setIsLoading(true);
      const updatedUser = await updateUser(user.id, {
        isHabitsComplete: true,
        isProfileComplete: true,
        isUserOnboarded: true,
      });
      await dispatch(setUser(updatedUser));
      track("Profile created");
      navigation.navigate("ProfileDoneScreen");
      setIsLoading(false);
    } catch (error) {
      console.log("My profile - Error updating user", error);
      setIsLoading(false);
    }
  };

  const editPrompt = (index) => {
    setEditPromptIndex(index);
    setPrompt(userPromptsList[index], index);
    setPromptResponse(userPromptsList[index].response);
    setIsEditingPrompt(true);
    setModalPromptResponseVisible(true);
  };

  const editResponse = () => {
    let newPrompt = [...userPromptsList];
    newPrompt[editPromptIndex].response = promptResponse;
    setUserPromptsList(newPrompt);
    setModalPromptResponseVisible(!modalPromptResponseVisible);
    savePrompts(newPrompt);
    setIsEditingPrompt(false);
    setEditPromptIndex(null);
    setPromptResponse("");
  };

  return (
    <>
      {isImageLoading && <LoadingFullPage />}
      <SafeAreaComponent testID="MyProfile" relative scrollable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={completeProfileModalVisible}
          className="relative"
        >
          <View className="w-full h-full p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-xl bg-card shadow-md">
            <Pressable
              onPress={() => setCompleteProfileModalVisible(false)}
              className="absolute top-16 right-4 bg-dark/10 rounded-full p-1 z-20"
            >
              <IconX width={25} height={25} color="#000" strokeWidth={1} />
            </Pressable>
            <Text
              allowFontScaling={false}
              className="text-dark-gray w-full font-bold font-jokkerl text-[32px] mb-6 mt-24"
            >
              Please complete your profile
            </Text>
            <Text
              allowFontScaling={false}
              className="text-dark-gray w-full font-bold font-jokkerl text-[16px] mb-6 leading-6"
            >
              The minimum information to be able to save your profile is to add
              at least one photo and one prompt.
            </Text>
            <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
              <DynamicButton
                onPress={() => setCompleteProfileModalVisible(false)}
                type={"primary"}
                label={t("my-profile-screen.image-error-cta")}
                size="large"
                rounded={"2xl"}
                position="none"
                textStyles="text-base"
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          className="relative"
          onRequestClose={closePromptsModal}
        >
          <View className="w-full h-full p-5 flex items-center justify-start absolute bottom-0 pb-24 rounded-t-xl bg-card shadow-md">
            {/* Close Modal Icon */}
            <Pressable
              onPress={() => closePromptsModal()}
              className="absolute top-16 right-4 bg-dark/10 rounded-full p-1 z-20"
            >
              <IconX width={25} height={25} color="#000" strokeWidth={1} />
            </Pressable>
            <Text
              allowFontScaling={false}
              className="text-dark-gray w-full font-bold text-lg font-jokkerl text-[24px] mb-6 mt-12"
            >
              {t("user-prompts.prompts")}
            </Text>
            <ScrollView horizontal={true} className="h-10 -ml-5 -mr-5">
              {promptCategories.map((promptCat, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    setPromptIndex(-1);
                    setPromptCategory(promptCat.id);
                  }}
                  className={`rounded-[5px] ${
                    promptCat.id === promptCategory
                      ? "border-b border-solid border-dark"
                      : ""
                  } ${
                    index === 0 && "ml-5"
                  } py-2 px-3 mr-2 h-8 flex items-center justify-center`}
                >
                  <Text
                    allowFontScaling={false}
                    className="text-dark font-jokkerl"
                  >
                    {promptCat.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <ScrollView
              className="text-dark-gray w-full h-full"
              showsHorizontalScrollIndicator={false}
            >
              {prompts
                .filter((prompt) => prompt.promptCategory === promptCategory)
                .map((prompt, index) => (
                  <Pressable
                    key={prompt.id}
                    onPress={() => {
                      setPrompt(prompt, index);
                    }}
                    className={`border border-solid ${
                      index === promptIndex ? "border-dark" : "border-dark/20"
                    } p-4 mt-4 rounded-[8px]`}
                  >
                    <Text
                      allowFontScaling={false}
                      className="text-[16px] font-jokkerl"
                    >
                      {prompt.name}
                    </Text>
                  </Pressable>
                ))}
            </ScrollView>
            <View className="absolute w-screen px-6 bottom-12 left-0 flex flex-row items-center justify-end">
              <DynamicButton
                onPress={() => addPrompt()}
                type={"icon"}
                size="large"
                iconPosition="right"
                icon={"chevron-right"}
                iconSize={30}
                showBgImage
                iconColor="black"
                rounded="full"
                position="none"
                textStyles="text-base"
                isLoading={isLoading}
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalPromptResponseVisible}
          className="relative"
          onRequestClose={togglePromptResponseModal}
        >
          <View className="w-full p-5 flex items-center justify-start h-full pt-24 rounded-t-xl bg-card shadow-md">
            <Pressable
              onPress={togglePromptResponseModal}
              className="absolute top-16 right-4 bg-dark/10 rounded-full p-1"
            >
              <IconX width={25} height={25} color="#140E0E" strokeWidth={1} />
            </Pressable>
            <Text
              allowFontScaling={false}
              className="text-dark-gray w-full mb-2 text-[36px] font-jokkerl"
            >
              {userPromptsList[promptPosition]?.name}
            </Text>
            <View className="w-full h-64 mb-2">
              <TextInput
                className="h-64 bg-black/10 text-dark p-2 rounded-lg"
                multiline={true}
                value={promptResponse}
                onChangeText={(text) => setPromptResponse(text)}
                textAlignVertical={"top"}
                maxLength={100}
                autoCorrect={true}
              />
            </View>
            <View className="w-full flex flex-row items-end justify-center mb-4">
              <Text
                allowFontScaling={false}
                className="w-full text-right font-jokker"
              >
                {promptResponse ? promptResponse.length : 0} / 100
              </Text>
            </View>
            <DynamicButton
              onPress={() => (isEditingPrompt ? editResponse() : addResponse())}
              type={"primary"}
              label={`${t("general.add-to-profile")}`}
              size="large"
              rounded="full"
              position="none"
              textStyles="text-base"
            />
          </View>
        </Modal>
        <View
          className={"w-full h-full flex flex-col items-center justify-center"}
        >
          <UserPhotoUpload paddingVertical={24} onLoading={setIsImageLoading} />
          <View className="w-full flex flex-row items-center justify-start pt-4 pb-2 flex-wrap">
            <Text
              allowFontScaling={false}
              className="text-[40px] font-jokkerl font-light -tracking-widest"
            >
              {user.firstName} {user.lastName ?? `${user.lastName}`}
            </Text>
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl font-light -tracking-wide pl-3 mt-[15px]"
            >
              (you)
            </Text>
          </View>
          <View className="w-full flex flex-row items-center justify-start">
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl font-light -tracking-wide"
            >
              {dayjs().diff(user.birthdate, "year")}{" "}
              {user.location
                ? `/ ${user.location.split(",")[0]}, ${user.location
                    .split(",")[1]
                    .slice(0, 3)}`
                : ""}
            </Text>
          </View>
          <View className="w-full flex items-start justify-center py-4 bg-card mt-4 p-4 rounded-xl">
            <Pressable
              className="w-full"
              onPress={() => navigation.navigate("EditBioScreen")}
            >
              {user.bio ? (
                <Text allowFontScaling={false} className="text-[18px]">
                  {t("my-account.bio")} {user.firstName}
                </Text>
              ) : (
                <Text allowFontScaling={false} className="text-[18px]">
                  {t("my-account.bio-not-set")}
                </Text>
              )}

              <Text allowFontScaling={false} className="text-[16px] mt-2">
                {user.bio ? (
                  <Text allowFontScaling={false} className="text-[16px] mt-2">
                    {user.bio}
                  </Text>
                ) : (
                  <Text allowFontScaling={false} className="text-[16px] mt-2">
                    {t("my-account.bio-description")}
                  </Text>
                )}
              </Text>
            </Pressable>
          </View>
          <View className="w-full flex flex-row items-center justify-between">
            <Text
              allowFontScaling={false}
              className="text-[16px] font-jokkerl font-light w-full py-4"
            >
              {t("my-account.add-prompts")}
            </Text>
          </View>
          <View className="w-full flex items-center justify-center">
            <View className="w-full flex flex-row items-center justify-center border border-dashed border-dark p-4 rounded-xl bg-dark/20 relative min-h-[60px]">
              {userPromptsList[0].name ? (
                <>
                  <View className="w-[25px] h-[25px] z-20 rounded-full bg-white absolute -right-2 -top-2">
                    <Pressable onPress={() => removePrompt(0)}>
                      <IconCircleMinus
                        className="z-20"
                        width={25}
                        height={25}
                        color={"#000"}
                        strokeWidth={1}
                      />
                    </Pressable>
                  </View>
                  <Pressable onPress={() => editPrompt(0)} className="w-full">
                    <View className="w-full flex items-center justify-center flex-col relative">
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[16px] font-jokkerl"
                      >
                        {userPromptsList[0].name}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[14px] mt-2"
                      >
                        {userPromptsList[0].response}
                      </Text>
                    </View>
                  </Pressable>
                </>
              ) : (
                <Pressable
                  className="flex items-center justify-center flex-row"
                  onPress={() => togglePromptsModal(0)}
                >
                  <Text
                    allowFontScaling={false}
                    className="mr-2 font-jokkerl font-light text-[16px]"
                  >
                    {t("user-prompts.1st-prompt")}
                  </Text>
                  <View className="w-[25px] h-[25px] z-20 rounded-full bg-white flex items-center justify-center">
                    <IconCirclePlus
                      width={25}
                      height={25}
                      color={"#000"}
                      strokeWidth={1}
                    />
                  </View>
                </Pressable>
              )}
            </View>
          </View>
          <View className="w-full flex items-center justify-center mt-4">
            <View className="w-full flex flex-row items-center justify-center border border-dashed border-dark p-4 rounded-xl bg-dark/20 relative min-h-[60px]">
              {userPromptsList[1].name ? (
                <>
                  <View className="w-[25px] h-[25px] rounded-full bg-white absolute -right-2 -top-2 z-10">
                    <Pressable onPress={() => removePrompt(1)}>
                      <IconCircleMinus
                        width={25}
                        height={25}
                        color={"#000"}
                        strokeWidth={1}
                      />
                    </Pressable>
                  </View>
                  <Pressable onPress={() => editPrompt(1)} className="w-full">
                    <View className="w-full flex items-center justify-center flex-col relative">
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[16px] font-jokkerl"
                      >
                        {userPromptsList[1].name}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[14px] mt-2"
                      >
                        {userPromptsList[1].response}
                      </Text>
                    </View>
                  </Pressable>
                </>
              ) : (
                <Pressable
                  className="flex items-center justify-center flex-row"
                  onPress={() => togglePromptsModal(1)}
                >
                  <Text
                    allowFontScaling={false}
                    className="mr-2 font-jokkerl font-light text-[16px]"
                  >
                    {t("user-prompts.2nd-prompt")}
                  </Text>
                  <View className="w-[25px] h-[25px] z-20 rounded-full bg-white flex items-center justify-center">
                    <IconCirclePlus
                      width={25}
                      height={25}
                      color={"#000"}
                      strokeWidth={1}
                    />
                  </View>
                </Pressable>
              )}
            </View>
          </View>
          <View
            className={`w-full flex items-center justify-center mt-4 mb-4 ${
              !isOnboarding && "mb-[200px]"
            }`}
          >
            <View className="w-full flex flex-row items-center justify-center border border-dashed border-dark p-4 rounded-xl bg-dark/20 relative min-h-[60px]">
              {userPromptsList[2].name ? (
                <>
                  <View className="w-[25px] h-[25px] z-20 rounded-full bg-white absolute -right-2 -top-2">
                    <Pressable onPress={() => removePrompt(2)}>
                      <IconCircleMinus
                        className="z-20"
                        width={25}
                        height={25}
                        color={"#000"}
                        strokeWidth={1}
                      />
                    </Pressable>
                  </View>
                  <Pressable onPress={() => editPrompt(2)} className="w-full">
                    <View className="w-full flex items-center justify-center flex-col relative">
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[16px] font-jokkerl"
                      >
                        {userPromptsList[2].name}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        className="w-full mr-2 text-[14px] mt-2"
                      >
                        {userPromptsList[2].response}
                      </Text>
                    </View>
                  </Pressable>
                </>
              ) : (
                <Pressable
                  className="flex items-center justify-center flex-row"
                  onPress={() => togglePromptsModal(2)}
                >
                  <Text
                    allowFontScaling={false}
                    className="mr-2 font-jokkerl font-light text-[16px]"
                  >
                    {t("user-prompts.3rd-prompt")}
                  </Text>
                  <View className="w-[25px] h-[25px] z-20 rounded-full bg-white flex items-center justify-center">
                    <IconCirclePlus
                      width={25}
                      height={25}
                      color={"#000"}
                      strokeWidth={1}
                    />
                  </View>
                </Pressable>
              )}
            </View>
          </View>
          {isOnboarding && (
            <View className="w-full mb-[150px]">
              {/* <Text allowFontScaling={false}>{userPromptsList.some((prompt) => prompt.name !== "")}</Text> */}
              <DynamicButton
                onPress={() => goToYouScreen()}
                type={"primary"}
                label={t("general.my-profile-is-complete")}
                size="large"
                rounded={"2xl"}
                position="none"
                icon={"arrow-right"}
                iconSize={30}
                iconColor="white"
                iconPosition="right"
                textStyles="text-base"
                isLoading={isLoading}
              />
            </View>
          )}
        </View>
      </SafeAreaComponent>
    </>
  );
}
