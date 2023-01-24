import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:boostbyjossan@outlook.com?subject=${data.subject}&body=${data.message}`);

  return (
    <div className="form-container">
      <h1> Hör av dig!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Namn</label>
        <input
          placeholder="Anna"
          {...register('firstName', { required: true })}
        />
        {errors.message && <span className="err-msg">*Måste ifyllas</span>}{' '}
        <br />
        <label htmlFor="lastName">Efternamn</label>
        <input
          placeholder="Andersson"
          {...register('lastName', { required: true })}
        />
        {errors.message && <span className="err-msg">*Måste ifyllas</span>}{' '}
        <br />
        <label htmlFor="email">Email</label>
        <input
          placeholder="anna.andersson@gmail.com"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.message && <span className="err-msg">*Måste ifyllas</span>}
        <br />
        <label htmlFor="subject">Ämne</label>
        <input {...register('subject')} placeholder="ämne" type="text" />
        <br />
        <label htmlFor="lastName">Meddelande</label>
        <textarea
          {...register('message', { required: true })}
          name="message"
          id="message"
          cols={30}
          rows={7}
        />
        {errors.message && <span className="err-msg"> *Måste ifyllas</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
