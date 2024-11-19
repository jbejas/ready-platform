import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type GenderMetaData = {
  readOnlyFields: 'updatedAt';
}

type EthnicityMetaData = {
  readOnlyFields: 'updatedAt';
}

type ReligionMetaData = {
  readOnlyFields: 'updatedAt';
}

type ZodiacSignMetaData = {
  readOnlyFields: 'updatedAt';
}

type PronounMetaData = {
  readOnlyFields: 'updatedAt';
}

type SexualOrientationMetaData = {
  readOnlyFields: 'updatedAt';
}

type GenderPrefenceMetaData = {
  readOnlyFields: 'updatedAt';
}

type LanguageMetaData = {
  readOnlyFields: 'updatedAt';
}

type EatingPreferenceMetaData = {
  readOnlyFields: 'updatedAt';
}

type PhotoMetaData = {
  readOnlyFields: 'updatedAt';
}

type QuoteMetaData = {
  readOnlyFields: 'updatedAt';
}

type ContentMetaData = {
  readOnlyFields: 'updatedAt';
}

type PromptMetaData = {
  readOnlyFields: 'updatedAt';
}

type PromptEntryMetaData = {
  readOnlyFields: 'updatedAt';
}

type PromptCategoryMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerUser = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname?: string | null;
  readonly phone: string;
  readonly email: string;
  readonly birthdate: string;
  readonly height: number;
  readonly genderpreferences?: (GenderPrefence | null)[] | null;
  readonly ageprefence: number;
  readonly distancepreference: number;
  readonly havechildren: string;
  readonly familyplans: string;
  readonly educationlevel: string;
  readonly school: string;
  readonly languages?: (Language | null)[] | null;
  readonly jobtitle: string;
  readonly work: string;
  readonly drink: string;
  readonly tobacco: string;
  readonly drugs: string;
  readonly eatingpreferences?: (EatingPreference | null)[] | null;
  readonly exercise: string;
  readonly sleepinghabits: string;
  readonly hometown: string;
  readonly prompts?: (Prompt | null)[] | null;
  readonly photos?: (Photo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly firstname: string;
  readonly lastname?: string | null;
  readonly phone: string;
  readonly email: string;
  readonly birthdate: string;
  readonly height: number;
  readonly genderpreferences: AsyncCollection<GenderPrefence>;
  readonly ageprefence: number;
  readonly distancepreference: number;
  readonly havechildren: string;
  readonly familyplans: string;
  readonly educationlevel: string;
  readonly school: string;
  readonly languages: AsyncCollection<Language>;
  readonly jobtitle: string;
  readonly work: string;
  readonly drink: string;
  readonly tobacco: string;
  readonly drugs: string;
  readonly eatingpreferences: AsyncCollection<EatingPreference>;
  readonly exercise: string;
  readonly sleepinghabits: string;
  readonly hometown: string;
  readonly prompts: AsyncCollection<Prompt>;
  readonly photos: AsyncCollection<Photo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerGender = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGender = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gender = LazyLoading extends LazyLoadingDisabled ? EagerGender : LazyGender

export declare const Gender: (new (init: ModelInit<Gender, GenderMetaData>) => Gender) & {
  copyOf(source: Gender, mutator: (draft: MutableModel<Gender, GenderMetaData>) => MutableModel<Gender, GenderMetaData> | void): Gender;
}

type EagerEthnicity = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEthnicity = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ethnicity = LazyLoading extends LazyLoadingDisabled ? EagerEthnicity : LazyEthnicity

export declare const Ethnicity: (new (init: ModelInit<Ethnicity, EthnicityMetaData>) => Ethnicity) & {
  copyOf(source: Ethnicity, mutator: (draft: MutableModel<Ethnicity, EthnicityMetaData>) => MutableModel<Ethnicity, EthnicityMetaData> | void): Ethnicity;
}

type EagerReligion = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReligion = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Religion = LazyLoading extends LazyLoadingDisabled ? EagerReligion : LazyReligion

export declare const Religion: (new (init: ModelInit<Religion, ReligionMetaData>) => Religion) & {
  copyOf(source: Religion, mutator: (draft: MutableModel<Religion, ReligionMetaData>) => MutableModel<Religion, ReligionMetaData> | void): Religion;
}

type EagerZodiacSign = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyZodiacSign = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ZodiacSign = LazyLoading extends LazyLoadingDisabled ? EagerZodiacSign : LazyZodiacSign

export declare const ZodiacSign: (new (init: ModelInit<ZodiacSign, ZodiacSignMetaData>) => ZodiacSign) & {
  copyOf(source: ZodiacSign, mutator: (draft: MutableModel<ZodiacSign, ZodiacSignMetaData>) => MutableModel<ZodiacSign, ZodiacSignMetaData> | void): ZodiacSign;
}

type EagerPronoun = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPronoun = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pronoun = LazyLoading extends LazyLoadingDisabled ? EagerPronoun : LazyPronoun

export declare const Pronoun: (new (init: ModelInit<Pronoun, PronounMetaData>) => Pronoun) & {
  copyOf(source: Pronoun, mutator: (draft: MutableModel<Pronoun, PronounMetaData>) => MutableModel<Pronoun, PronounMetaData> | void): Pronoun;
}

type EagerSexualOrientation = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySexualOrientation = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SexualOrientation = LazyLoading extends LazyLoadingDisabled ? EagerSexualOrientation : LazySexualOrientation

export declare const SexualOrientation: (new (init: ModelInit<SexualOrientation, SexualOrientationMetaData>) => SexualOrientation) & {
  copyOf(source: SexualOrientation, mutator: (draft: MutableModel<SexualOrientation, SexualOrientationMetaData>) => MutableModel<SexualOrientation, SexualOrientationMetaData> | void): SexualOrientation;
}

type EagerGenderPrefence = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userGenderpreferencesId?: string | null;
}

type LazyGenderPrefence = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userGenderpreferencesId?: string | null;
}

export declare type GenderPrefence = LazyLoading extends LazyLoadingDisabled ? EagerGenderPrefence : LazyGenderPrefence

export declare const GenderPrefence: (new (init: ModelInit<GenderPrefence, GenderPrefenceMetaData>) => GenderPrefence) & {
  copyOf(source: GenderPrefence, mutator: (draft: MutableModel<GenderPrefence, GenderPrefenceMetaData>) => MutableModel<GenderPrefence, GenderPrefenceMetaData> | void): GenderPrefence;
}

type EagerLanguage = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLanguagesId?: string | null;
}

type LazyLanguage = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLanguagesId?: string | null;
}

export declare type Language = LazyLoading extends LazyLoadingDisabled ? EagerLanguage : LazyLanguage

export declare const Language: (new (init: ModelInit<Language, LanguageMetaData>) => Language) & {
  copyOf(source: Language, mutator: (draft: MutableModel<Language, LanguageMetaData>) => MutableModel<Language, LanguageMetaData> | void): Language;
}

type EagerEatingPreference = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userEatingpreferencesId?: string | null;
}

type LazyEatingPreference = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userEatingpreferencesId?: string | null;
}

export declare type EatingPreference = LazyLoading extends LazyLoadingDisabled ? EagerEatingPreference : LazyEatingPreference

export declare const EatingPreference: (new (init: ModelInit<EatingPreference, EatingPreferenceMetaData>) => EatingPreference) & {
  copyOf(source: EatingPreference, mutator: (draft: MutableModel<EatingPreference, EatingPreferenceMetaData>) => MutableModel<EatingPreference, EatingPreferenceMetaData> | void): EatingPreference;
}

type EagerPhoto = {
  readonly id: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPhotosId?: string | null;
}

type LazyPhoto = {
  readonly id: string;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPhotosId?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo, PhotoMetaData>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo, PhotoMetaData>) => MutableModel<Photo, PhotoMetaData> | void): Photo;
}

type EagerQuote = {
  readonly id: string;
  readonly content: string;
  readonly author: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuote = {
  readonly id: string;
  readonly content: string;
  readonly author: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Quote = LazyLoading extends LazyLoadingDisabled ? EagerQuote : LazyQuote

export declare const Quote: (new (init: ModelInit<Quote, QuoteMetaData>) => Quote) & {
  copyOf(source: Quote, mutator: (draft: MutableModel<Quote, QuoteMetaData>) => MutableModel<Quote, QuoteMetaData> | void): Quote;
}

type EagerContent = {
  readonly id: string;
  readonly contentype: string;
  readonly author: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContent = {
  readonly id: string;
  readonly contentype: string;
  readonly author: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content, ContentMetaData>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content, ContentMetaData>) => MutableModel<Content, ContentMetaData> | void): Content;
}

type EagerPrompt = {
  readonly id: string;
  readonly description: string;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrompt = {
  readonly id: string;
  readonly description: string;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prompt = LazyLoading extends LazyLoadingDisabled ? EagerPrompt : LazyPrompt

export declare const Prompt: (new (init: ModelInit<Prompt, PromptMetaData>) => Prompt) & {
  copyOf(source: Prompt, mutator: (draft: MutableModel<Prompt, PromptMetaData>) => MutableModel<Prompt, PromptMetaData> | void): Prompt;
}

type EagerPromptEntry = {
  readonly id: string;
  readonly name: string;
  readonly category?: PromptCategory | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPromptEntry = {
  readonly id: string;
  readonly name: string;
  readonly category: AsyncItem<PromptCategory | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PromptEntry = LazyLoading extends LazyLoadingDisabled ? EagerPromptEntry : LazyPromptEntry

export declare const PromptEntry: (new (init: ModelInit<PromptEntry, PromptEntryMetaData>) => PromptEntry) & {
  copyOf(source: PromptEntry, mutator: (draft: MutableModel<PromptEntry, PromptEntryMetaData>) => MutableModel<PromptEntry, PromptEntryMetaData> | void): PromptEntry;
}

type EagerPromptCategory = {
  readonly id: string;
  readonly name: string;
  readonly prompts?: (PromptEntry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPromptCategory = {
  readonly id: string;
  readonly name: string;
  readonly prompts: AsyncCollection<PromptEntry>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PromptCategory = LazyLoading extends LazyLoadingDisabled ? EagerPromptCategory : LazyPromptCategory

export declare const PromptCategory: (new (init: ModelInit<PromptCategory, PromptCategoryMetaData>) => PromptCategory) & {
  copyOf(source: PromptCategory, mutator: (draft: MutableModel<PromptCategory, PromptCategoryMetaData>) => MutableModel<PromptCategory, PromptCategoryMetaData> | void): PromptCategory;
}