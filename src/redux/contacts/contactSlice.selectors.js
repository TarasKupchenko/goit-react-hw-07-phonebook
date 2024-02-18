import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectContactsList = createSelector(
  selectContacts,
  contacts => contacts.contacts
);

export const selectStatus = createSelector(
  selectContacts,
  contacts => contacts.status
);

export const selectError = createSelector(
  selectContacts,
  contacts => contacts.error
);
