/*
{
    "constant": false,
    "inputs": [
    {
        "internalType": "uint256",
        "name": "completed",
        "type": "uint256"
    }
    ],
    "name": "setCompleted",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}

function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
}


{
    "constant": false,
    "inputs": [
        {
            "internalType": "uint256",
            "name": "toValidatorID",
            "type": "uint256"
        }
    ],
    "name": "delegate",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStaking {
    function delegate(uint256 toValidatorID) external payable;                                                  // NOTE WORKS! delegate your tokens to some validator
    function claimRewards(uint256 toValidatorID) external;                                                      // NOTE WORKS! claim into your account / wallet
    function pendingRewards(address delegator, uint256 toValidatorID) external view returns(uint256);           // NOTE WORKS! know pending reward
    function getUnlockedStake(address delegator, uint256 toValidatorID) external view returns(uint256);         // NOTE WORKS! all stake is unlocked by default
    function restakeRewards(uint256 toValidatorID) external;                                                    // NOTE WORKS! restake your 
    function getStake(address delegator, uint256 toValidatorID) external view returns(uint256);                 // NOTE WORKS! check my total unlockedStake
    function withdrawalPeriodEpochs() external pure returns(uint256);                                           // NOTE WORKS! 7 days
    function withdrawalPeriodTime() external pure returns(uint256);                                             // NOTE WORKS! 7 day, can we verify when unlocking ??
    function getSelfStake(uint256 validatorID) external view returns(uint256);                                  // NOTE WORKS! 500k
    function totalStake() external view returns(uint256);                                                       // NOTE WORKS! total FTM staked currently
    function undelegate(uint256 toValidatorID, uint256 wrID, uint256 amount) external;
    function withdraw(uint256 toValidatorID, uint256 wrID) external; // need to check how this works ....

    function redeemSFTM(uint256 stakerID, uint256 amount) external; // doesn't seem to work ?
    function withdrawalPeriodTime(uint256 stakerID) external pure;
    function getLockedStake(address delegator, uint256 toValidatorID) external view returns(uint256);
    function getLockupInfo(address delegator, uint256 toValidatorID) external view returns(
        uint256 lockedStake,
        uint256 fromEpoch,
        uint256 endTime,
        uint256 duration
    );
    function baseRewardPerSecond() external view returns(uint256);
    function contractCommission() external pure returns(uint256);
    function currentSealedEpoch() external view returns(uint256);
    function getStashedLockupRewards(uint256 delgator, uint256 toValidatorID) external view returns(
        uint256 lockupExtraReward,
        uint256 lockupBaseReward,
        uint256 unlockedReward
    );
    function getValidator(uint256 toValidatorID) external view returns(
        uint256 status,
        uint256 deactivatedTime,
        uint256 deactivatedEpoch,
        uint256 receivedStake,
        uint256 createdEpoch,
        uint256 createdTime,
        address auth
    );
    function getValidatorID(address validator) external view returns(uint256);
    function getValidatorPubkey(uint256 toValidatorID) external view returns(bytes memory);
    function maxLockupDuration() external pure returns(uint256);
    function minLockupDuration() external pure returns(uint256);
    function minSelfStake() external pure returns(uint256);
    function slashingRefundRatio() external view returns(uint256);
    function totalActiveStake() external view returns(uint256);
    function currentEpoch() external view returns(uint256);
    function rewardsStash(address delegator, uint256 validatorID) external view returns(uint256);
    function isSlashed(uint256 validatorID) external view returns(bool); // what is slashing ?
    function stashRewards(address delegator, uint256 toValidatorID) external; // what is this , is this something only validator owner can do ?
}


interface IERC20 {
    function approve(address spender, uint256 amount) external returns (bool);
}
// 0x405b3cA1047C933F8d0714009Bfa43B5F1DA6376