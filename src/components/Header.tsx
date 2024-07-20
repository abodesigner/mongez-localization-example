import { trans } from "@mongez/localization";
import ChangeLangButton from "./ChangeLangButton";

export default function Header() {
    return (
        <div className="flex justify-evenly items-center bg-slate-200 text-black text-3xl min-h-24">
            <h1 className="">{trans("page-header")}</h1>
            <ChangeLangButton />
        </div>
    );
}
