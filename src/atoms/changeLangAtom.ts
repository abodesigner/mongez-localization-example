import { getCurrentLocaleCode } from "@mongez/localization";
import { atom } from "@mongez/react-atom";

export const changeLangAtom = atom({
    key: "changeLangAtom",
    default: getCurrentLocaleCode()
})