"use client";
import { AiOutlineLoading } from "react-icons/ai";

export default function InputPad({ setValue, submit, pending }: {setValue: (arg: number | ((prevValue: number) => number)) => void, submit: () => void, pending: boolean}){
  
  const numberArr = [1,2,3,4,5,6,7,8,9];
  return(
    <main className="flex gap-2">
      <section className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {numberArr.map(num => <Keypad num={num} key={num} setValue={setValue}/>)}
        </div>
        <div className="flex justify-center items-center text-3xl shadow-lg active:shadow-none rounded-lg py-3 px-5 bg-white dark:bg-black dark:text-white font-bold select-none" onClick={() => setValue((prevValue: number) => prevValue.toString().length < 15 ? parseInt(`${prevValue}${0}`) : prevValue)}>
          <p>0</p>
        </div>
      </section>
      <section className="grid grid-rows-[1fr_4fr] gap-2">
        <div className="flex justify-center items-center text-lg shadow-lg active:shadow-none rounded-lg py-3 px-5 bg-white dark:bg-black dark:text-white font-bold w-full text-center select-none" onClick={() => setValue((prevValue: number) => parseInt(`${
            prevValue.toString().slice(0, -1) || 0
          }`))}>
          <p>delete</p>
        </div>
        <div className="flex justify-center items-center text-lg shadow-xl active:shadow-none rounded-lg px-2 bg-white dark:bg-black dark:text-white font-bold w-full text-center h-full select-none" onClick={async () => await submit()}>
          <p>{pending ? <AiOutlineLoading className="animate-spin fill-black text-md dark:fill-white"/> : "submit"}</p>
        </div>
      </section>
    </main>
  )
}

const Keypad = ({num, key, setValue}: {num: number, key: number, setValue: (arg: number | ((prevValue: number) => number)) => void}) => {
  return(
    <div key={key} className="flex justify-center items-center text-3xl shadow-lg active:shadow-none rounded-lg py-3 px-5 bg-white dark:bg-black dark:text-white font-bold select-none" onClick={() => setValue((prevValue: number) => prevValue.toString().length < 15 ? parseInt(`${prevValue}${num}`) : prevValue)}>
      <p>{num}</p>
    </div>
  )
}