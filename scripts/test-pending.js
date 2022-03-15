const IStaking = artifacts.require("IStaking")
const IERC20 = artifacts.require("IERC20")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"
const SFTM = "0x3b28f151899bd945ac1559a3540b5741c7d2bd55"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    // const ierc20 = await IERC20.at(SFTM)

    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    

    try {
    // await ierc20.approve(SFC_CONTRACT_ADDRESS,toWei("1"))
    // const txn = await istaking.redeemSFTM(1, toWei("1"), {
    //     from: owner,
    // })
    const txn = await istaking.pendingRewards(owner, 1, {
        from: owner,
    })
    console.log('pending reward: ', fromWei(txn))
    console.log(`txn: ${JSON.stringify(txn)}`)
    } catch (e) {
    console.log(e.message)
    }

    done()
}