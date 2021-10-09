import FormInput from '../components/FormInput';
import { FormEvent, useReducer, useCallback } from 'react';

function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5) return 'Minimum input length of 5 characters';
  return null;
}

type Action = {action: string, payload: string};
type Store = {name: string, email: string, address: string, country: string, bio: string}

export default function Profile() {
  const [state, dispatch] = useReducer((store: Store, action: Action): Store => {
    store[action.action] = action.payload;
    return store;
  }, {name: "", email: "", address: "", country: "", bio: ""})

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pretending to send form data...', Object.fromEntries(new FormData(e.currentTarget).entries()));
  };

  const onInputCallBack = (actionName: string) => useCallback(data => dispatch({action: actionName, payload: data}), [])

  return (
    <form className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border" onSubmit={submitForm}>
      <FormInput id="name" label="Name" onInput={onInputCallBack("name")} errorMessage={getErrorMessage(state.name)} />
      <FormInput id="email" label="Email" onInput={onInputCallBack("email")} errorMessage={getErrorMessage(state.email)} />
      <FormInput id="address" label="Address" onInput={onInputCallBack("address")} errorMessage={getErrorMessage(state.address)} />
      <FormInput id="country" label="Country" onInput={onInputCallBack("country")} errorMessage={getErrorMessage(state.country)} />
      <FormInput id="bio" label="About me" onInput={onInputCallBack("bio")} errorMessage={getErrorMessage(state.bio)} />
      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">Save</button>
      </div>
    </form>
  )
}
