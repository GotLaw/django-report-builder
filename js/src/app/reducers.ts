import {
    ActionReducerMap,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
import { environment } from '../environments/environment';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromReports from './reducers/reports';
import * as fromDisplayField from './reducers/display-field';
import * as fromConfig from './reducers/config';

export interface State {
  reports: fromReports.State;
  displayFields: fromDisplayField.State;
  config: fromConfig.State;
}

export const reducers: ActionReducerMap<State> = {
  reports: fromReports.reducer,
  displayFields: fromDisplayField.reducer,
  config: fromConfig.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
? [storeFreeze]
: [];

const getConfigState = (state: State) => state.config;
export const getIsAsyncReport = createSelector(getConfigState, fromConfig.getIsAsyncReport);

const getReportsState = (state: State) => state.reports;
export const getReports = createSelector(getReportsState, fromReports.getReports);
export const getSelectedReport = createSelector(getReportsState, fromReports.getSelectedReport);
export const getSelectedReportId = createSelector(getReportsState, fromReports.getSelectedReportId);
export const getFields = createSelector(getReportsState, fromReports.getFields);
export const getRelatedFields = createSelector(getReportsState, fromReports.getRelatedFields);
export const getDescriptionInput = createSelector(getReportsState, fromReports.getDescriptionInput);
export const getIsDistinct = createSelector(getReportsState, fromReports.getIsDistinct);
export const getEditedReport = createSelector(getReportsState, fromReports.getEditedReport);
export const getPreview = createSelector(getReportsState, fromReports.getPreview);
export const getLastSaved = createSelector(getReportsState, fromReports.getLastSaved);
export const getNewReportInfo = createSelector(getReportsState, fromReports.getNewReportInfo);
export const getLastGeneratedReport = createSelector(getReportsState, fromReports.getLastGeneratedReport);
