const IStaking = artifacts.require("IStaking")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    try {
        const baseReward = await istaking.baseRewardPerSecond()
        console.log('baseReward', fromWei(baseReward))

        // const withdrawalPeriodTime = await istaking.withdrawalPeriodTime(1)
        // console.log('withdrawalPeriodTime', fromWei(withdrawalPeriodTime))

        const getStake = await istaking.getStake(owner, 1)
        console.log('getStake', fromWei(getStake))

        const withdrawalPeriodTime2 = await istaking.withdrawalPeriodTime()
        // 7 days
        console.log('withdrawalPeriodTime2', withdrawalPeriodTime2)

        const withdrawalPeriodEpochs = await istaking.withdrawalPeriodEpochs()
        // 7 days
        console.log('withdrawalPeriodEpochs', withdrawalPeriodEpochs)

        const minSelfStake = await istaking.minSelfStake()
        console.log('minSelfStake', fromWei(minSelfStake))
        // 500k

        const totalStake = await istaking.totalStake()
        console.log("total stake", fromWei(totalStake))

    } catch (e) {
        console.log(e.message)
    }

    done()
}