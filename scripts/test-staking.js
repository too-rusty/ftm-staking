const IStaking = artifacts.require("IStaking")


const SFC_CONTRACT_ADDRESS = "0xfc00face00000000000000000000000000000000"

const toWei = (amount) => { return web3.utils.toWei(amount, "ether")}
const fromWei = (amount) => { return web3.utils.fromWei(amount, "ether")}

module.exports = async (done) => {
    const istaking = await IStaking.at(SFC_CONTRACT_ADDRESS)
    const [owner] = await web3.eth.getAccounts()
    console.log("owner", owner)
    
    const txn = await istaking.delegate(1, {
        from: owner,
        value: toWei("3")
    })

    console.log(`txn: ${JSON.stringify(txn)}`)

    done()
}