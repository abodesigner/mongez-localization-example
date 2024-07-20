import { trans } from "@mongez/localization";

const Content = () => {
  return (
      <div className="flex justify-center items-center bg-green-400 text-black text-3xl min-h-80">
          <h1 className="">{trans("page-content")}</h1>
      </div>
  );
}
export default Content