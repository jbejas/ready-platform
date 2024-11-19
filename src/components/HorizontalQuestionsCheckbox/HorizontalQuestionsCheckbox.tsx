import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

// Define the props type for your navigation stack
interface HorizontalQuestionsCheckboxProps {
  data?: { id?: string; name: string; isActive?: boolean }[];
  onSelectValue: (
    selectedValue: {
      id?: string;
      name: string;
      isActive?: boolean;
    }[]
  ) => void;
  scrollable?: boolean;
  existingValues?: any;
}

export default function HorizontalQuestionsCheckbox({
  data,
  onSelectValue,
  scrollable = false,
  existingValues,
}: HorizontalQuestionsCheckboxProps) {
  const [checkedItems, setCheckedItems] = useState<
    {
      id?: string;
      name: string;
      isActive?: boolean;
    }[]
  >([]);
  const [responses, setResponses] = useState<
    {
      id?: string;
      name: string;
      isActive?: boolean;
    }[]
  >([]);
  const [isDataProcessed, setIsDataProcessed] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const mappedResponses: {
        id?: string;
        name: string;
        isActive?: boolean;
      }[] = [];
      if (existingValues) {
        const parsedValues = existingValues.split(",");
        parsedValues.map((response) => {
          if (response !== "") {
            mappedResponses.push({
              name: response.trim(),
            });
          }
        });
        setCheckedItems(mappedResponses);
      }
      setIsDataProcessed(true);
    }, 500);
  }, [data]);

  const processQuestions = async () => {
    const mappedResponses: {
      id?: string;
      name: string;
      isActive?: boolean;
    }[] = [];
    data.map((response) => {
      if (response.name !== "") {
        mappedResponses.push({
          id: response.id,
          name: response.name,
        });
        // addResponse({
        //   id: response.id,
        //   name: response.name,
        // });
      }
    });
    setResponses(mappedResponses);
  };

  useEffect(() => {
    processQuestions();
  }, [data]);

  const addResponse = (value: {
    id?: string;
    name: string;
    isActive?: boolean;
  }) => {
    const currentIndex = checkedItems.findIndex(
      (item) => item.name === value.name
    );
    let newCheckedItems = [...checkedItems];

    if (value.name === "Prefer not to share") {
      // Clean array if it is prefer not to share
      newCheckedItems = [value];
      setCheckedItems(newCheckedItems);
      return;
    } else {
      // Remove Prefer not to share
      const preferNotToShareIndex = checkedItems.findIndex(
        (item) => item.name === "Prefer not to share"
      );
      if (preferNotToShareIndex !== -1) {
        newCheckedItems.splice(preferNotToShareIndex, 1);
      }

      // Add value if not exists or remove value if exists
      if (currentIndex === -1) {
        newCheckedItems.push(value);
      } else {
        newCheckedItems.splice(currentIndex, 1);
      }
    }
    setCheckedItems(newCheckedItems);
  };

  useEffect(() => {
    onSelectValue(checkedItems);
  }, [checkedItems]);

  interface Props {
    customStyles?: string;
  }

  const CheckboxesElement = ({ customStyles }: Props) => {
    return (
      <View
        className={`flex flex-row flex-wrap justify-between w-full mt-0 sm-1:mt-6  relative ${customStyles}`}
      >
        {isDataProcessed &&
          responses.map((response, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  addResponse(response);
                }}
                className={`${
                  checkedItems.some((item) => item.name === response.name)
                    ? "!bg-black"
                    : ""
                } w-[48%] h-[80px] border border-dark/20 rounded-xl p-2 mb-4 flex items-center justify-center`}
              >
                <View className="w-full h-full flex items-center justify-center">
                  <Text
                    allowFontScaling={false}
                    className={`${
                      checkedItems.some(
                        (item) => item.name === response.name
                      ) && "!text-white"
                    } text-center w-full font-jokkerl text-[14px]`}
                  >
                    {response.name}
                  </Text>
                </View>
              </Pressable>
            );
          })}
      </View>
    );
  };

  return (
    <View className="w-full flex-1">
      {scrollable ? (
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <CheckboxesElement customStyles="pt-[60px] sm-1:pt-[80px]" />
        </ScrollView>
      ) : (
        <CheckboxesElement />
      )}
    </View>
  );
}
