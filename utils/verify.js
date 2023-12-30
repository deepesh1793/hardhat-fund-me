async function verify(contractAddress, args) {
    console.log("Verifying...Please wait")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args
        })
    }
    catch (e) {
        if (e.message.toLowerCase().includes("already been verified")) {
            console.log("Contract already verified!")
        }
        else {
            console.log(e)
        }
    }
}
module.exports = { verify }