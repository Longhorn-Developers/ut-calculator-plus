import Input from "@/components/Input";
import Button from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [firstNum, setFirstNum] = useState<number>();
  const [secondNum, setSecondNum] = useState<number>();

  const [resFirstNum, setResFirstNum] = useState<number>();
  const [resSecondNum, setResSecondNum] = useState<number>();
  const [result, setResult] = useState<number>();

  return (
    <div className="flex flex-col items-center py-4 px-8 gap-5">
      {/* Inputs */}
      <div className="flex gap-6 justify-center">
        <Input
          title="Enter first number"
          value={String(firstNum || "")}
          onChange={(event) => {
            const newNum = Number(event.target.value);
            if (!Number.isNaN(newNum)) {
              setFirstNum(newNum);
            }
          }}
        />
        <div className="min-h-full flex justify-center items-center">
          <div className="border-stone-300/50 border-b w-8 rotate-[-60deg]" />
        </div>
        <Input
          title="Enter second number"
          value={String(secondNum || "")}
          onChange={(event) => {
            const newNum = Number(event.target.value);
            if (!Number.isNaN(newNum)) {
              setSecondNum(newNum);
            }
          }}
        />
      </div>
      {/* Result */}
      {result ? (
        <div className="p-5 bg-burnt-orange/10 rounded-xs w-full flex flex-col items-center font-['Roboto Flex']">
          <div className="text-ut-black">
            {resFirstNum} ÷ {resSecondNum}
          </div>
          <div className="text-burnt-orange text-4xl font-bold">{result}</div>
        </div>
      ) : undefined}
      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <Button
          text="Calculate"
          type="primary"
          disabled={!firstNum || !secondNum}
          onClick={() => {
            setResFirstNum(firstNum);
            setResSecondNum(secondNum);
            setResult(firstNum! / secondNum!);
          }}
        />
        <Button
          text="Clear"
          disabled={!firstNum && !secondNum}
          onClick={() => {
            setFirstNum(NaN);
            setSecondNum(NaN);
            setResult(NaN);
          }}
        />
      </div>
    </div>
  );
}
