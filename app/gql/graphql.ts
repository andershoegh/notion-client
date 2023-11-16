/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type NotionDatabase = {
  __typename?: 'NotionDatabase';
  id: Scalars['String']['output'];
  properties: Array<NotionDatabaseProperty>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type NotionDatabaseNotFound = {
  __typename?: 'NotionDatabaseNotFound';
  errorMessage?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type NotionDatabasePage = {
  __typename?: 'NotionDatabasePage';
  categoryRefID?: Maybe<Scalars['String']['output']>;
  featureGroupRefIDs: Array<Scalars['String']['output']>;
  featureName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jobToBeDone: Array<Scalars['String']['output']>;
  maturityID?: Maybe<Scalars['String']['output']>;
};

export type NotionDatabaseProperty = {
  __typename?: 'NotionDatabaseProperty';
  name: Scalars['String']['output'];
  type: NotionDatabasePropertyType;
};

export enum NotionDatabasePropertyType {
  Checkbox = 'checkbox',
  CreatedBy = 'created_by',
  CreatedTime = 'created_time',
  Date = 'date',
  Email = 'email',
  Files = 'files',
  Formula = 'formula',
  LastEditedBy = 'last_edited_by',
  LastEditedTime = 'last_edited_time',
  MultiSelect = 'multi_select',
  Number = 'number',
  People = 'people',
  PhoneNumber = 'phone_number',
  Relation = 'relation',
  RichText = 'rich_text',
  Rollup = 'rollup',
  Select = 'select',
  Status = 'status',
  Title = 'title',
  UniqueId = 'unique_id',
  Url = 'url'
}

export type NotionDatabaseResult = NotionDatabase | NotionDatabaseNotFound;

export type Query = {
  __typename?: 'Query';
  notionDatabase?: Maybe<NotionDatabaseResult>;
  notionDatabasePages: Array<NotionDatabasePage>;
};


export type QueryNotionDatabaseArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotionDatabasePagesArgs = {
  databaseID: Scalars['String']['input'];
};

export type NotionDatabasePagesQueryVariables = Exact<{
  databaseId: Scalars['String']['input'];
}>;


export type NotionDatabasePagesQuery = { __typename?: 'Query', notionDatabasePages: Array<{ __typename?: 'NotionDatabasePage', id: string, featureName?: string | null, categoryRefID?: string | null, featureGroupRefIDs: Array<string>, maturityID?: string | null, jobToBeDone: Array<string> }> };


export const NotionDatabasePagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotionDatabasePages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notionDatabasePages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"databaseID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"databaseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featureName"}},{"kind":"Field","name":{"kind":"Name","value":"categoryRefID"}},{"kind":"Field","name":{"kind":"Name","value":"featureGroupRefIDs"}},{"kind":"Field","name":{"kind":"Name","value":"maturityID"}},{"kind":"Field","name":{"kind":"Name","value":"jobToBeDone"}}]}}]}}]} as unknown as DocumentNode<NotionDatabasePagesQuery, NotionDatabasePagesQueryVariables>;