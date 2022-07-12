// try {
//     throw "something terrible has happened"
//     console.log("Try!")
// } catch (error) {
//     console.log(error)
// }

function panicExceptAtLizards(text) {
    if (text == "lizard") {
        return true
    } else {
        throw "ERROR: input must be a lizard"
    }
}

panicExceptAtLizards("frog")