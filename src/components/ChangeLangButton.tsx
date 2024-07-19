import { changeLangAtom } from "@/atoms/changeLangAtom";
import { Button } from "./ui/button";
import { setCurrentLocaleCode } from "@mongez/localization";

const ChangeLangButton = () => {
    //const localCode = changeLangAtom.useValue();
    const [localeCode, setLocaleCode] = changeLangAtom.useState()

    const handleChangeLang = () => {
        const newLocal = localeCode === "en" ? "ar" : "en";
        setCurrentLocaleCode(newLocal);
        setLocaleCode(newLocal);
    };
    return (
        <>
            <Button onClick={handleChangeLang}>
                Change to : {localeCode === "en" ? "العربية" : "English"}
            </Button>
        </>
    );
};
export default ChangeLangButton;
