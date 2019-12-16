<script>
  import { fade } from 'svelte/transition';

  let alerts = [];

  function handleSubmit() {
    const fd = new FormData(this);
    for (let [name, value] of fd.entries()) {
      console.log(`${name}: ${value}`);
    }
    this.reset();

    const index = alerts.length;
    alerts = [...alerts, "Your e-mail was successfully sent!"];
    setTimeout(() => alerts = alerts.filter((a, idx) => idx !== index), 4500);
  }
</script>

<style type="text/scss">
  h2 {
    text-align: center;
  }

  p {
    width: 70%;
    margin: 0 auto 1rem;
    text-align: center;
  }

  form {
    width: 70%;
    margin: 1rem auto;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
  }

  input {
    border-bottom: 1px solid white;
  }

  textarea {
    border: 1px solid white;
    resize: none;
  }

  input:focus,
  textarea:focus {
    outline: 1px solid #999;
  }

  input:invalid {
    border-bottom: 2px solid red;
  }

  textarea:invalid {
    border: 2px solid red;
  }

  button {
    border: 1px solid white;
    background-color: var(--main-bg-color, black);
    color: var(--main-text-color, white);

    &:hover {
      cursor: pointer;
      background-color: #222;
    }

    &:focus {
      background-color: #999;
    }

    &:active {
      background-color: #999;
    }
  }

  .alert {
    width: 70%;
    border: 1px solid white;
    border-radius: 2px;
    margin: 1rem auto;
    padding: 0.25rem;
  }
</style>

<h2>Contact Us</h2>
<p>
  For any idea, recommendation, or question, write your name, e-mail, and
  message in the form below and we will respond back as soon as possible.
</p>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" name="name" placeholder="Name" required maxlength="99" />

  <input type="email" name="email" placeholder="E-Mail" required />

  <textarea
    name="message"
    rows="8"
    placeholder="Write here your message"
    required
    maxlength="5000" />

  <button>Send</button>
</form>

{#each alerts as alert}
  <div class="alert" transition:fade>{alert}</div>
{/each}
