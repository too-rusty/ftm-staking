const IStaking = artifacts.require("IStaking")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    try {
    const txn = await istaking.undelegate(1, 1, 2)
    console.log('txn', txn)
    console.log(`txn: ${JSON.stringify(txn)}`)
    } catch (e) {
    console.log(e.message)
    }

    done()
}

// function undelegate(uint256 toValidatorID, uint256 wrID, uint256 amount) external;

/*
pretty much self explanatory
validatorID, unique withdrawal request ID, and amount
can use that wrID to withdraw later .....
*/