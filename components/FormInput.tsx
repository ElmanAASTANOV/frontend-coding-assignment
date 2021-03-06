import {memo, useEffect} from 'react';
// import scheduler from "scheduler";
type Props = {
  id: string,
  label: string,
  onInput: (input: string) => void,
  errorMessage?: string,
}

export default memo(function FormInput({id, label, errorMessage, onInput}: Props) {

  useEffect(() => {
    let worker = new Worker('task.js');
    worker.postMessage({milliseconds: 5000})
  }, [])


  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">{label}</label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onInput={(e) => onInput(e.currentTarget.value)}
        />
        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
})
