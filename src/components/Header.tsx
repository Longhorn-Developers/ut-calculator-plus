/// <reference types="vite-plugin-svgr/client" />
import Icon from "@/logo.svg?react";

export default function Header() {
  return (
    <>
      <header>
        <div className="self-stretch p-4 border-b border-lhd-border w-full">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <Icon></Icon>
            </div>
            <div className="font-semibold font-['Inter'] text-burnt-orange leading-4">
              UT Calculator
              <br />
              Plus
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
