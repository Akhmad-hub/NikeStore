import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = ({ onCartToggle ,totalQTY, onClearCartItems}) => {
  return (
    <div className="bg-white flex  items-center justify-between h-11 px-3 sticky top-0 right-0 left-0 w-full">
      <div className="flex items-center gap-3">
        <div
          className="grid items-center cursor-pointer "
          onClick={onCartToggle}
        >
          <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
        </div>
        <h1 className="text-base font-medium text-slate-900">
          Your Cart{" "}
          <span className="bg-theme-cart rounded p-1 text-white text-xs">
            {" "}
            ({ totalQTY}items)
          </span>
        </h1>
      </div>
      <div className="grid items-center ">
        <button
          onClick={onClearCartItems}
          type="button"
          className="bg-theme-cart rounded active:scale-90 p-1"
        >
          <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
