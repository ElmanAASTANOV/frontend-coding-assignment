import FormInput from '../components/FormInput';
import { FormEvent, useState, useMemo } from 'react';

function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5) return 'Minimum input length of 5 characters';
  return null;
}

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pretending to send form data...', Object.fromEntries(new FormData(e.currentTarget).entries()));
  };

  return (
    <form className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border" onSubmit={submitForm}>
      <FormInput id="name" label="Name" onInput={setName} errorMessage={ useMemo( ()=> getErrorMessage(name), [name])} />
      <FormInput id="email" label="Email" onInput={setEmail} errorMessage={useMemo( ()=> getErrorMessage(email), [email])} />
      <FormInput id="address" label="Address" onInput={setAddress} errorMessage={useMemo( ()=> getErrorMessage(address), [address])} />
      <FormInput id="country" label="Country" onInput={setCountry} errorMessage={useMemo( ()=> getErrorMessage(country), [country])} />
      <FormInput id="bio" label="About me" onInput={setBio} errorMessage={useMemo( ()=> getErrorMessage(bio), [bio])} />
      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">Save</button>
      </div>
    </form>
  )
}
