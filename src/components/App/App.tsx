import { useState } from 'react';

import ToastContainer from '../Toast/ToastContainer';
import ToastManager from '../Toast/ToastManager';
import { Container } from './styles';

function App() {
  const [toastText, setToastText] = useState<string>('Toast message here...');
  const [duration, setDuration] = useState<number>(10000);

  function addMessage() {
    ToastManager.addMessage(toastText, duration);
  }

  function addSuccess() {
    ToastManager.addSuccess(toastText, duration);
  }

  function addError() {
    ToastManager.addError(toastText, duration);
  }

  return (
    <Container>
      <ToastContainer />
      <main>
        <h1>Toast Component Demo</h1>

        <input value={toastText} onChange={e => setToastText(e.target.value)} autoFocus />

        <div>
          <label htmlFor='duration'>Duration in Milliseconds:</label>
          <input
            id='duration'
            type='number'
            className='duration-input'
            step={1000}
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
          />
        </div>

        <button className='btn' onClick={addMessage}>
          Add Normal Toast
        </button>
        <button className='btn-success' onClick={addSuccess}>
          Add Success Toast
        </button>
        <button className='btn-error' onClick={addError}>
          Add Error Toast
        </button>
      </main>
    </Container>
  );
}

export default App;
