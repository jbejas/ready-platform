// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { User, Gender, Ethnicity, Religion, ZodiacSign, Pronoun, SexualOrientation, GenderPrefence, Language, EatingPreference, Photo, Quote, Content, Prompt, PromptEntry, PromptCategory } = initSchema(schema);

export {
  User,
  Gender,
  Ethnicity,
  Religion,
  ZodiacSign,
  Pronoun,
  SexualOrientation,
  GenderPrefence,
  Language,
  EatingPreference,
  Photo,
  Quote,
  Content,
  Prompt,
  PromptEntry,
  PromptCategory
};