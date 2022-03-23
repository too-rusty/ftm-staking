const IStaking = artifacts.require("IStaking")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    try {
    const balanceBefore = await web3.eth.getBalance(owner)
    console.log(`balanceBefore: ${fromWei(balanceBefore)}\n`)
    const txn = await istaking.withdraw(1, 3)
    const balanceAfter = await web3.eth.getBalance(owner)
    console.log(`balanceBefore: ${fromWei(balanceBefore)}\nbalanceAfter: ${fromWei(balanceAfter)}\n`)
    console.log('txn', txn)
    console.log(`txn: ${JSON.stringify(txn)}`)
    } catch (e) {
    console.log(e.message)
    }

    done()
}

// function withdraw(uint256 toValidatorID, uint256 wrID) external;

/*

withdraw with a give wrID , generated during the time of undelegating....

TRY doing this on WEDNESDAY , 23MARCH since maybe 1 week is the time ....

unbonding period ? maybe 7 days

should add back 2 more FTM to the balance since that is the request ....


https://fantom.foundation/ftm-staking/
https://docs.fantom.foundation/staking/how-to-stake-on-fantom
https://medium.com/ankr-network/new-fantom-liquid-staking-earn-more-with-your-ftm-d8cb87dbe1ca
*/