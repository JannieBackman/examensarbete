import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:email?subject=${data.subject}&body=${data.message}`);

  return (
    <div className="form-container">
      <h1> Hör av dig!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Namn</label>
        <input placeholder="Anna" {...register('firstName')} />
        <label htmlFor="lastName">Efternamn</label>
        <input placeholder="Andersson" {...register('lastName')} />
        <label htmlFor="email">Email</label>
        <input
          placeholder="anna.andersson@hotmail.com"
          type="email"
          {...register('email')}
        />
        <label htmlFor="lastName">Meddelande</label>

        <textarea
          {...register('message', { required: true })}
          name="message"
          id="message"
          cols={30}
          rows={7}
        />

        {errors.message && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
