import kitsArray from "./KITS_SHIPPING_DATA.json"

// GET function for kits api
const kitsGet = key => {
    // only searches array once, should be O(N) for scalability
    for (let i = 0; i < kitsArray.length; i++) {
        if (kitsArray[i]["id"] == key) {
            return kitsArray[i]
        }
    }
    // return error if we do not find a valid kit
    return -1
}

export default kitsGet