import { Switch } from "@headlessui/react";

export default function ThemeToggle({ setEnabled, enabled }) {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-mainColor" : "bg-thirdColor"
        } w-10 h-6 p-1 rounded-full flex justify-start items-center transition-colors duration-500`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-4" : "translate-x-0"
          } h-4 w-4 rounded-full bg-secondColor transition-all duration-500`}
        />
      </Switch>
    </div>
  );
}
