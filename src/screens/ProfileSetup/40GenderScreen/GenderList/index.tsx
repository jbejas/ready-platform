import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@graphql/queries";
import { SearchGendersQuery } from "@src/api/index";
import Chip from "@src/components/Chip";
import SelectableToggleItem from "@src/components/SelectableToggleItem";
import Skeleton from "@src/components/Skeleton";
import useListSexualOrientation from "@src/hooks/useListSexualOrientation";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

interface GenderListProps {
  onPressAddMore: () => void;
  existingValue: any;
  sexualOrientation?: string | number;
  setResponse: (value: string) => void;
  onRemoveSexualOrientation?: () => void;
}

function GenderList({
  onPressAddMore,
  existingValue,
  setResponse,
  sexualOrientation,
  onRemoveSexualOrientation,
}: GenderListProps) {
  const [genders, setGenders] = useState<
    { id: string; name: string; isActive: boolean }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data: allSexualOrientations } = useListSexualOrientation({
    refetchOnMount: false,
  });

  const API = generateClient();
  const { t } = useTranslation();

  const getAllGenders = async () => {
    setIsLoading(true);
    try {
      const allGenders = await API.graphql<GraphQLQuery<SearchGendersQuery>>({
        query: queries.searchGenders,
        variables: {
          sort: {
            field: "sortOrder",
            direction: "asc",
          },
        },
      });
      setGenders(
        allGenders.data.searchGenders.items.map((item) => ({
          id: item.id || "",
          name: item.name,
          isActive: item.isActive,
        }))
      );
    } catch (error) {
      console.log("getAllGenders Error: ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllGenders();
  }, []);

  if (!isLoading && genders.length === 0) {
    return null;
  }

  return (
    <View style={{ gap: 8 }}>
      {isLoading && (
        <>
          <Skeleton height={72} width={"100%"} />
          <Skeleton height={72} width={"100%"} />
          <Skeleton height={72} width={"100%"} />
        </>
      )}
      {!isLoading &&
        genders
          ?.filter((gender) => gender.name.trim().length)
          ?.map((gender, index) => {
            return (
              <Fragment key={index}>
                <SelectableToggleItem
                  selected={gender.name === existingValue}
                  title={gender.name}
                  variantToggle="organic-radio"
                  onSelect={() => {
                    setResponse(gender.name);
                  }}
                  footer={
                    <>
                      {gender.name === existingValue && sexualOrientation && (
                        <Chip
                          label={
                            allSexualOrientations?.items.find(
                              (item) => item.name === sexualOrientation
                            )?.name || ""
                          }
                          onRemove={onRemoveSexualOrientation}
                        />
                      )}
                    </>
                  }
                />
                {gender.name === existingValue && !sexualOrientation && (
                  <View className="flex items-end my-4">
                    <TouchableOpacity onPress={onPressAddMore}>
                      <Text className="underline font-jokkerl text-base text-primary-blue-100">
                        {t("user-gender.add-more")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Fragment>
            );
          })}
    </View>
  );
}

export default GenderList;
