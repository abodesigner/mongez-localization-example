import { trans } from "@mongez/localization";

const Footer = () => {
  return (
      <div className="flex justify-center items-center bg-slate-900 text-white text-3xl min-h-24">
          <h1 className="">{trans("page-footer")}</h1>
      </div>
  );
}
export default Footer