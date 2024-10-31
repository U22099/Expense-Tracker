"use client";

export default function InputPad({ setValue }: {setValue: (arg: number | ((prevValue: number) => number)) => void}){
  
  const numberArr = [1,2,3,4,5,6,7,8,9];
  const submit = () => {
    console.log("submitting");
  }
  return(
    <main className="flex gap-2">
      <section className="flex flex-col">
        <div className="grid grid-cols-3 gap-2">
          {numberArr.map(num => <Keypad num={num} key={num} setValue={setValue}/>)}
        </div>
        <div className="flex justify-center items-center font-lg rounded-lg p-2 bg-black dark:bg-white font-bold w-full text-center" onClick={() => setValue((prevValue: number) => parseInt(`${value}${0}`))}>
          <p>0</p>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center font-lg rounded-lg p-2 bg-black dark:bg-white font-bold w-full text-center" onClick={() => setValue((prevValue: number) => parseInt(`${
            value.toString().slice(0, -1)
          }`))}>
          <p>delete</p>
        </div>
        <div className="flex justify-center items-center font-lg rounded-lg p-2 bg-black dark:bg-white font-bold w-full text-center" onClick={submit}>
          <p>submit</p>
        </div>
      </section>
    </main>
  )
}

const Keypad = ({num, key, setValue}: {num: number, key: number, setValue: (arg: number) => void}) => {
  return(
    <div key={key} className="flex justify-center items-center font-lg rounded-lg p-2 bg-black dark:bg-white font-bold" onClick={() => setValue((prevValue: number) => parseInt(`${value}${num}`))}>
      <p>{num}</p>
    </div>
  )
}