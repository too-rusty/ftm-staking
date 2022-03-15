const IStaking = artifacts.require("IStaking")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    try {
    const txn = await istaking.getUnlockedStake(owner, 1)
    console.log('unlocked stake', fromWei(txn))
    console.log(`txn: ${JSON.stringify(txn)}`)
    } catch (e) {
    console.log(e.message)
    }

    done()
}

/*

Weird, all of my stake is in unlocked state ....
shouldn't it be in locked state ....
there is a function to lockStake , what is that .... how does it work
    and there is another function that is to query for info ...

*/