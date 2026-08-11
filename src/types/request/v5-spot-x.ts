export interface GetLaunchpoolProjectListParamsV5 {
  status: number;
  activityCoin?: string;
  projectId?: string;
  cursor?: string;
  limit?: number;
}

export interface GetLaunchpoolUserActivityLogParamsV5 {
  stakeCoin?: string;
  type?: number;
  status?: number;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  current?: number;
}

export interface GetLaunchpoolUserHistoryParamsV5 {
  stakeCoin?: string;
  rewardCoin?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  current?: number;
}

export interface GetPuzzleProjectListParamsV5 {
  status: number;
  projectId?: string;
  activityCoin?: string;
  cursor?: string;
  limit?: number;
}

export interface GetTokenSplashProjectListParamsV5 {
  status: number;
  projectId?: string;
  activityCoin?: string;
  cursor?: string;
  limit?: number;
}

export interface GetTokenSplashUserActivityParamsV5 {
  projectId?: string;
  activityCoin?: string;
}
