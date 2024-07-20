import {setRouterConfigurations} from "@mongez/react-router"

setRouterConfigurations({
    autoRedirectToLocaleCode: false,
    localization: {
        localeCodes: ["en", "ar"],
        defaultLocaleCode: "ar"
    }
})