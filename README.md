
### How does it work
when we stake tokens, they are in unlocked stake .....
i guess locking prevents us from unstaking them .... not sure, it can be a way to earn more APY

#### PendingRewards
the pending rewards , its a view function, let's us know about the pending rewards balance.

#### ClaimRewards
lets us claim the rewards , added to our wallet
guess rewards can be claimed instantaneously ....

#### UnlockedStake
our staking in the validator, let's us know our stake
this is not the Locked stake , need to check how its different from unlocked stake

#### RestakeRewards
adds the reward to unlocked stake
so unlockedStake should go up ....
and sure it does ......


#### UndelegateFTM
requires a unique wrID that is used to claim delegations at a later point of time
Note that the undelegated amount doesnt change, i guess it will reduce once we withdraw
After firing this command , the number of FTM tokens from the staked amount reduces

#### WithdrawFTM
withdraw with that key, need to try after a week because withdrawal time is 1 week afaik


#### LockingFTM
As stated on https://fantom.foundation/ftm-staking/
"Select a validator, stake-as-you-go for a 4% APY or lock up your FTM
from a min of 2 weeks up to a year to earn higher staking rewards"

....Stake-as-you-go with no lock-up, or lock-up your FTM up to 12 months....


## Some FAQS on ftm site

#### Can I use my tokens while staking?
No, you cannot use your tokens while staking.
To withdraw them, you have to unstake them first. Unstaking takes 7 days.
ergo , 7 days is the unbonding period

#### How long does it take to unstake my FTM?
It takes 7 days. During that time you will not receive rewards.
Once the 7 days pass, you can withdraw the tokens from your wallet.