const en = {
  i18n: {
    login: 'Login',
    account: 'Account',
    mint: 'Mint',
    mintPlaceholder: 'OUSD Amount to mint',
    mintDesc: 'Mint OUSD by staking OGX. This gives you a Collateralization Ratio and a debt, allowing you to earn staking rewards.',
    mintDesc1: 'After Staking you need to wait {minStakeTime} days before you can destroy it',
    max: 'MAX',
    currRatio: 'C-Ratio',
    minRatio: 'Min C-Ratio',
    confirm: 'Confirm',
    cancel: 'Cancel',
    burn: 'Burn',
    burnPlaceholder: 'OUSD Amount to burn',
    burnDesc: 'Burn OUSD to unlock your staked OGX. This increases your Collateralization Ratio and reduces your debt',
    ousdBal: 'OUSD bal',
    debt: 'Debt',
    myDebt: 'My Debt',
    exchange: 'Exchange',
    exchangeDesc: 'Trade any synths with infinite depth.',
    paidToken: 'Input',
    bal: 'Bal',
    inputTokenPlaceholder: '0.0',
    getToken: 'Output',
    outputTokenPlaceholder: '0.0',
    currentSwapPrice: 'Price',
    fee: 'Fee',
    claimReward: 'Claim',
    claimRewardDesc: 'If you have staked your OGX and minted OUSD, you are eligible to collect two kinds of rewards: OGX staking rewards (locked for 1 year) and exchange fees',
    nextRoundReward: 'est rewards of next round',
    nextRoundRewardTip: 'After this round finished, you can start to claim this part of the reward',
    estApr: 'est APR',
    ogxReward: 'OGX Reward',
    feeReward: 'Fee Reward',
    currentRoundFee: 'Fee in current round',
    currentRoundVol: 'Volume in current round',
    currentRoundStartTime: 'Start time of current round',
    currentClaimable: 'Rewards Available',
    deadline: 'Claim deadline for current period',
    deadlineDesc: 'Please complete the collection within the specified time',
    deadlineTips: 'For personal rewards not collected within the deadline, this part of the rewards will be recycled and placed in the public reward pool in the next period.',
    lowRatio: 'Insufficient C-Ratio',
    noReward: 'No Rewards Available',
    storePool: 'Reward Escrow',
    storeDesc: 'Vest your OGX staking rewards in escrow',
    unlockTime: 'Unlock Time',
    amount: 'Amount',
    selectToken: 'Select Token',
    testnet: 'Testnet Account',
    myWallet: 'MY WALLET DETAILS',
    refresh: 'Refresh',
    currentRatio: 'Current C-Ratio',
    targetRatio: 'Target C-Ratio',
    claim: 'Claim',
    store: 'Escrow',
    valued: 'USD',
    locked: 'Locked',
    transferable: 'Transferable',
    staked: 'Staked',
    unstaked: 'Unstaked',
    walletBal: 'Balance',
    stored: 'Escrow',
    myAssets: 'My Assets',
    sysOverview: 'Synths Distribution',
    token: 'Token',
    supply: 'Supply',
    price: 'Price',
    totalValue: 'Total Value',
    total: 'Total',
    myTotal: 'My OGX',
    success: 'Success',
    mintSuccess: 'Success',
    burnSuccess: 'Success',
    swapSuccess: 'Success',
    claimSuccess: 'Success',
    totalSynthAssetsValue: 'Synths Total Value',
    underGoing: 'The advanced version of the Organix Exchange is under development',
    error: 'Error: ',
    stakeTimeNotReached: 'Minimum stake time not reached',
    isStale: 'A synth or OGX rate is stale',
    tooLarge: 'Amount too large',
    noDebtToForgive: 'No debt to forgive',
    ratioBelowPenalty: 'C-ratio below penalty threshold',
    noRewardOrClaimed: 'no fees or rewards available for period, or fees already claimed',
    liquidationRatio: 'Liquidation C-Ratio',
    liquidationDelay: 'Liquidation Delay',
    updateTime: 'Price updated at',
    cantSettleDuringWaiting: 'Cannot settle during waiting period',
    insufficientBalance: 'insufficient balance after any settlement owing',
    liquidation: 'Liquidation',
    liquidationDesc: 'When the C-ratio is lower than {liqRatio}, it can be marked as to be settled. There will be a buffer period. If the buffer period is exceeded, it can be liquidated by anyone. The liquidator can obtain more valuable OGX through paying OUSD',
    maxToMint: 'Amount can be mint',
    hour: 'Hour(s)',
    liqDeadline: 'Buffer Deadline',
    noData: 'No data',
    updateTimeTip: 'When the update time is stalled, there will be a deviation in trading',
    reverseAssetsRule: 'Such as IBTC, IETH, and IEOS, assets with the start \'I\' is a reverse asset that follows the opposite price changes of the normal asset.',
    home: 'Home',
    me: 'Me',
    dashboard: 'Overview',
    copy: 'Copy',
    copied: 'Copied',
    copiedFailed: 'Copy failed',
    confirmVest: 'Confirm vest',
    reward: 'Claim',
    sysStat: 'System Statistics',
    cantRecomSelf: "You can not recommend yourself",
    referLink: 'Referrer link',
    referLinkTip: 'Will receive 10% of the invitee’s trading fee, you can not invite yourself',
    totalSupply: 'Total Supply',
    utilization: 'Utilization',
    hasClaimed: 'Already Claimed',
    day: 'Days',
    minute: 'Minute(s)',
    minStakingTime: 'Minimum Stake Time',
    oAssets: 'What is an O asset?',
    iAssets: 'What is an I asset?',
    burnAvaileAt: 'Burn availble after {canBurnTime}',
    privatePool: 'Token-sale Escrow',
    privateDesc: 'Vest your token sales escrow pool',
    whatisOassets: 'Assets starting with \'O\', such as OBTC and OETH, have the same price as BTC and ETH. When ETH rises by $10, OETH will also rise by $10.',
    whatisIassets: 'The price of assets starting with \'I\' like IBTC and IETH is opposite to the price trend of BTC and ETH, that is, when BTC rises by 10 dollars, IBTC drops by 10 dollars. Similarly, when ETH drops by 100 dollars, IETH will rise by 100 dollars.',
    whatisTargetRatio: 'The minimum collateralization ratio in the system. When your C-ratio is lower than this value, you can not claim the reward. You can adjust the C-ratio by minting and burning OUSD.',
    mint1: 'Mint OUSD',
    mint2: 'by Staking OGX',
    burn1: 'Burn OUSD',
    burn2: 'unlock OGX',
    exchange1: 'Exhange synths',
    exchange2: 'using OUSD',
    reward1: 'Claim rewards',
    reward2: 'according to debt',
    wrongAmount: 'Invaild Amount',
    notEnough: 'Insufficient Balance',
    aboutTradingGap: 'About settlement',
    profit: 'Profit',
    claimRules: 'After the claim, OGX rewards will be stored in the escrow and can be vest after a locking time. The trading fee reward will be directly transferred to your account',
    tradingGap: 'It takes about 1-2 minute for the system to settle the trading between buying and selling the same currency.The settlement price will select the corresponding Oracle price according to the transaction time for settlement, and the settlement trigger time is the next sale of the currency.',
    aboutNoSlip: 'About no slippage',
    noSlip: 'The deal price of all tokens depends on the price provided by the oracle',
    maxQueueReached: 'The unsettled orders of output currency are full. Please try to reverse sell or buy a small amount of tokens to finish the settlement of historical orders before conducting this transaction',
    settleNeeds: '{symbol} needs {time}s to settle',
    whatisprofit: 'This value only represents the difference between your debt and synthetic assets',
    exchangeOldBtn: 'Exchange {bal} into new tokens',
    oldTokenDesc: 'The OGX token contract has been replaced by new contract {newContract}, please click the button below to convert into the new tokens.',
    howtogetOGX: 'Get OGX',
    changeNode: 'Node',
    custom: 'Custom',
    wrongNode: 'Please fill in a correct address',
    whatisdebt: 'Your debt begins as the amount of OUSD you initially mint, and fluctuates according to gains or losses made by other Synth holders. Any time someone holds a Synth that appreciates in value, that gain is distributed proportionally between all the staked OGX holders’ debts. To unlock all your staked OGX, you must first pay off your debt.',
    orderToBeSettled: 'Unsettled orders',
    settleAll: 'Settle All',
    time: 'Time',
    orderList: 'Order List',
    coming: 'Coming Soon',
    guide: 'User Guide',
    website: "Organix Website",
    lpReward: "LP Reward",
    lpReward1: "Get reward",
    lpReward2: "providing liquidity",
    lpRewardDesc: 'Get ogx rewards by providing liquidity',
    currentEpochClaimed: 'Current epoch claimed',
    manage: 'Manage',
    claimToEscrow: 'Claim to escrow',
    canClaimed: 'Can claim',
    claimToEscrowTip: 'After {claimTime} you can claim to escrow',
    dfsTips: 'When started you need to execute a new market-making operation in DFS once.',
    startAt: 'Started at '
  }
};

export default en;