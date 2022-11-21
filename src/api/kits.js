import kitsArray from "./KITS_SHIPPING_DATA.json"

// GET function for kits api
const kitsGet = key => {
    for (let i = 0; i < kitsArray.length; i++) {
        if (kitsArray[i]["id"] == key) {
            return kitsArray[i]
        }
    }
    return -1
}

export default kitsGet