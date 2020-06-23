
function sumCliArguments(){
    const argArray = process.argv.slice(2).map((num) => parseInt(num))

    if (argArray.length > 0) {
        const sum = argArray.reduce((sum, num) => sum + num)
        console.log(sum)
    }
}

sumCliArguments()
