import en from "./en.json"
import ar from "./ar.json"
import { extend, localizationEvents } from "@mongez/localization";
import { changeLocaleCode } from "@mongez/react-router";

extend('en', en)
extend('ar', ar)

// updated locale code
localizationEvents.onChange("localeCode", (newLocaleCode) => {
    changeLocaleCode(newLocaleCode);
});
