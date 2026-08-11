export interface LaunchpoolPoolV5 {
  poolId: string;
  stakeCoin: string;
  apr: string;
  totalStakedAmount: string;
  participantCount: string;
}

export interface LaunchpoolProjectV5 {
  projectId: string;
  activityCoin: string;
  rewardCoin: string;
  status: number;
  totalReward: string;
  stakeStartTime: string;
  stakeEndTime: string;
  totalParticipantCount: string;
  pools: LaunchpoolPoolV5[];
}

export interface LaunchpoolProjectListResultV5 {
  list: LaunchpoolProjectV5[];
  nextPageCursor: string;
}

export interface LaunchpoolActivityLogItemV5 {
  stakeCoin: string;
  rewardCoin: string;
  amount: string;
  type: number;
  status: number;
  createdTime: string;
  orderId: string;
}

export interface LaunchpoolActivityLogResultV5 {
  list: LaunchpoolActivityLogItemV5[];
  total: number;
  pageSize: number;
  current: number;
}

export interface LaunchpoolStakingPositionV5 {
  stakeCoin: string;
  rewardCoin: string;
  stakeAmount: string;
  totalReward: string;
  autoRedeemDate: string;
}

export interface LaunchpoolCurrentStakingResultV5 {
  totalInvestmentUsd: string;
  totalEarningsUsd: string;
  todayEarningsUsd: string;
  list: LaunchpoolStakingPositionV5[];
}

export interface LaunchpoolUserHistoryItemV5 {
  stakeCoin: string;
  rewardCoin: string;
  totalReward: string;
  stakeStartTime: string;
  stakeEndTime: string;
}

export interface LaunchpoolUserHistoryResultV5 {
  list: LaunchpoolUserHistoryItemV5[];
  total: number;
  pageSize: number;
  current: number;
}

export interface PuzzleProjectV5 {
  projectId: string;
  activityCoin: string;
  rewardCoin: string;
  status: number;
  startTime: string;
  endTime: string;
  totalReward: string;
  participantCount: string;
}

export interface PuzzleProjectListResultV5 {
  list: PuzzleProjectV5[];
  nextPageCursor: string;
}

export interface TokenSplashProjectV5 {
  status: number;
  projectId: string;
  activityCoin: string;
  rewardCoin: string;
  totalReward: string;
  participantCount: string;
  registrationStartTime: string;
  activityEndTime: string;
}

export interface TokenSplashProjectListResultV5 {
  list: TokenSplashProjectV5[];
  nextPageCursor: string;
}

export interface TokenSplashTradeTaskV5 {
  tradeRequiredAmount: string;
  tradeUnit: string;
  tradedAmount: string;
  maxRewardAmount: string;
  estimatedRewardAmount: string;
  rewardCoin: string;
}

export interface TokenSplashUserActivityItemV5 {
  projectId: string;
  activityCoin: string;
  tradeTask: TokenSplashTradeTaskV5;
}

export interface TokenSplashUserActivityResultV5 {
  list: TokenSplashUserActivityItemV5[];
}
