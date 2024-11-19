// Amplify Graph Queries
import { generateClient } from "aws-amplify/api";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  searchCheckInQuestions,
  SearchCheckInQuestionsQuery,
  searchContentCategories,
} from "@gcq/index";
import * as queries from "@graphql/queries";
import {
  SearchDaysQuery,
  SearchContentCategoriesQuery,
  ListCheckInQuestionsQuery,
} from "@src/api";

import dayjs from "dayjs";

// Utils
import { getImageURL } from "@utils/images";
import { getCategoryById } from "@utils/categories";

// Constants
import { REFLECTION_DAYS } from "@src/constants/constants";

const API = generateClient();

const getLastDay = (userDays) => {
  try {
    if (userDays.length > 0) {
      const sortedUserDays = [...userDays].sort((a, b) => {
        var dateA = dayjs(a.createdAt).valueOf(),
          dateB = dayjs(b.createdAt).valueOf();
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
      });
      return sortedUserDays[0];
    }
  } catch (error) {
    console.log("getLastDay error", error);
  }
};

export const getUserCurrentDay = async (userDays) => {
  try {
    if (userDays.length === 0) {
      return {
        id: 0,
        day: 0,
        createdAt: "0",
      };
    }
    const userLastDay = getLastDay(userDays);
    return userLastDay;
  } catch (error) {
    console.log("getUserCurrentDay error", error);
  }
};

export const canUserReflectToday = async (userDays) => {
  try {
    const userDay = getLastDay(userDays);
    const today = dayjs().format("YYYY-MM-DD");
    const formattedLastReflectionDay = dayjs(userDay.createdAt).format(
      "YYYY-MM-DD"
    );
    if (formattedLastReflectionDay === today) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("canUserReflectToday error", error);
  }
};

export const getReflectionsByUser = async (userId) => {
  try {
    const userReflections = await API.graphql<GraphQLQuery<SearchDaysQuery>>({
      query: queries.searchDays,
      variables: {
        limit: 1000,
        filter: {
          userID: {
            eq: userId,
          },
        },
      },
    });
    return userReflections.data.searchDays.items;
  } catch (error) {
    console.log("getReflectionsByUser error", error);
  }
};

const getCurrentReflection = async (day, position) => {
  try {
    const onboardingReflections = await API.graphql<
      GraphQLQuery<SearchCheckInQuestionsQuery>
    >({
      query: searchCheckInQuestions,
      variables: {
        limit: 1,
        filter: {
          day: {
            eq: day,
          },
          sortOrder: {
            eq: position,
          },
        },
        sort: [
          {
            field: "day",
            direction: "asc",
          },
          {
            field: "sortOrder",
            direction: "asc",
          },
        ],
      },
    });
    return onboardingReflections.data.searchCheckInQuestions;
  } catch (error) {
    console.log("getCurrentReflection error", error);
  }
};

export const getCurrentReflectionByDay = async (day) => {
  try {
    const onboardingReflections = await API.graphql<
      GraphQLQuery<SearchCheckInQuestionsQuery>
    >({
      query: searchCheckInQuestions,
      variables: {
        limit: 1,
        filter: {
          day: {
            eq: day,
          },
        },
        sort: [
          {
            field: "sortOrder",
            direction: "desc",
          },
        ],
      },
    });
    return onboardingReflections.data.searchCheckInQuestions.items[0];
  } catch (error) {
    console.log("getCurrentReflectionByDay error", error);
  }
};

export const getCurrentReflectionDayCategoryId = async (day, position) => {
  try {
    const onboardingReflections = await API.graphql<
      GraphQLQuery<SearchCheckInQuestionsQuery>
    >({
      query: searchCheckInQuestions,
      variables: {
        limit: 1,
        filter: {
          day: {
            eq: day,
          },
          sortOrder: {
            eq: position,
          },
        },
      },
    });
    return onboardingReflections.data.searchCheckInQuestions.items[0]
      .checkInQuestionContentCategoryId;
  } catch (error) {
    console.log("getCurrentReflectionDayCategoryId error", error);
  }
};

export const getCurrentReflectionQuestion = async (day, position) => {
  try {
    const reflections = await getCurrentReflection(day, position);
    return reflections.items;
  } catch (error) {
    console.log("getCurrentReflectionQuestion error", error);
  }
};

export const getCurrentReflectionCategory = async (day, position) => {
  try {
    const reflections = await getCurrentReflection(day, position);
    return reflections.items[0].checkInQuestionTheme.name;
  } catch (error) {
    console.log("getCurrentReflectionCategory error", error);
  }
};

export const getDayImage = async (day, currentReflectionCategoryName) => {
  try {
    const checkInQuestion = await API.graphql<
      GraphQLQuery<SearchContentCategoriesQuery>
    >({
      query: searchContentCategories,
      variables: {
        limit: 10,
        filter: {
          name: {
            eq: currentReflectionCategoryName,
          },
        },
      },
    });

    const moddedDay = getReflectionDayNumber(day);

    const dayImages: any =
      checkInQuestion.data.searchContentCategories.items[0].dayImages;

    return dayImages.items.find((image) => image.day === moddedDay)?.url;
  } catch (error) {
    console.log("getDayImage error", error);
  }
};

export const getReflectionsDaysCount = async (userId) => {
  try {
    const reflections = await getReflectionsByUser(userId);
    // Remove day 0
    const daysWithoutDayZero = reflections.filter((day) => day.day !== 0);
    const daysCount = daysWithoutDayZero.filter(
      (item, index, self) => index === self.findIndex((t) => t.day === item.day)
    );
    const orderedDays = daysCount.sort((a, b) => (a.day || 0) - (b.day || 0));
    return orderedDays.length;
  } catch (error) {
    console.log("getReflectionsDaysCount error", error);
  }
};

export const getReflectionDaysCountByCategory = async (categoryId) => {
  try {
    const reflectionsByCategory = await API.graphql<
      GraphQLQuery<ListCheckInQuestionsQuery>
    >({
      query: queries.listCheckInQuestions,
      variables: {
        limit: 1000,
        filter: {
          checkInQuestionContentCategoryId: {
            eq: categoryId,
          },
        },
      },
    });

    const uniqueDays = reflectionsByCategory.data.listCheckInQuestions.items
      .filter((item) => item.sortOrder === 10)
      .sort((a, b) => a.day - b.day)
      .reduce((acc, curr) => {
        const day = curr;
        if (!acc.some((item) => item.day === day.day)) {
          acc.push(day);
        }
        return acc;
      }, []);
    return uniqueDays;
  } catch (error) {
    console.log("getReflectionDaysCountByCategory error", error);
  }
};

export const getConnectionReflectionData = async (connection) => {
  console.log("getConnectionReflectionData connection", connection);
  const connectionDaysCount = await getUserCurrentDay(connection.days.items);
  console.log(
    "connectionDaysCount",
    connectionDaysCount,
    connectionDaysCount.day % REFLECTION_DAYS
  );

  const getCategoryId = await getCurrentReflectionDayCategoryId(
    connectionDaysCount.day,
    connectionDaysCount.position
  );

  const category = await getCategoryById(getCategoryId);
  console.log("categoryName", category.name);

  const dayImage = await getDayImage(connectionDaysCount.day, category.name);
  const dayImageURL = await getImageURL(dayImage);

  console.log("dayImageURL", dayImageURL);

  return {
    currentCategoryReflectionDaysCount: connectionDaysCount.day % 10,
    currentReflectionCategoryName: category.name,
    userReflectionCardImageUrl: dayImageURL,
  };
};

export const getReflectionDayNumber = (daysCount: number) => {
  return daysCount % REFLECTION_DAYS === 0
    ? REFLECTION_DAYS
    : daysCount % REFLECTION_DAYS;
};
