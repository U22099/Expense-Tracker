"use client";

export default function InputPad({ setValue }: {setValue: (arg: number | ((prevValue: number) => number)) => void}){
  
  const numberArr = [1,2,3,4,5,6,7,8,9];
  const submit = () => {
    console.log("submitting");
  }
  return(
    <main className="flex gap-2">
      <section className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {numberArr.map(num => <Keypad num={num} key={num} setValue={setValue}/>)}
        </div>
        <div className="flex justify-center items-center text-6xl shadow-lg active:shadow-none rounded-lg p-12 bg-black dark:bg-white font-bold w-full text-center" onClick={() => setValue((prevValue: number) => parseInt(`${prevValue}${0}`))}>
          <p>0</p>
        </div>
      </section>
      <section className="grid grid-rows-[1fr_4fr] gap-2">
        <div className="flex justify-center items-center text-xl shadow-lg active:shadow-none rounded-lg p-6 bg-black dark:bg-white font-bold w-full text-center" onClick={() => setValue((prevValue: number) => parseInt(`${
            prevValue.toString().slice(0, -1) || 0
          }`))}>
          <p>delete</p>
        </div>
        <div className="flex justify-center items-center text-2xl shadow-xl active:shadow-none rounded-lg p-6 bg-black dark:bg-white font-bold w-full text-center h-full" onClick={submit}>
          <p>submit</p>
        </div>
      </section>
    </main>
  )
}

const Keypad = ({num, key, setValue}: {num: number, key: number, setValue: (arg: number | ((prevValue: number) => number)) => void}) => {
  return(
    <div key={key} className="flex justify-center items-center text-6xl shadow-lg active:shadow-none rounded-lg p-12 bg-black dark:bg-white font-bold" onClick={() => setValue((prevValue: number) => parseInt(`${prevValue}${num}`))}>
      <p>{num}</p>
    </div>
  )
}