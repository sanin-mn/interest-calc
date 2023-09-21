import { TextField, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert("Please fill the form")
    } else {
      setInterest(principle * rate / 100 * year)
    }

  }
  const resetData = () =>{

    setInterest('')
    setPrinciple('')
    setRate('')
    setYear('')
    
  }

  return (
    // outer baground
    <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center
     align-items-center bg-dark'>

      <div style={{ width: '500px' }} className='bg-light p-5 rounded '>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div style={{ height: '150px' }} className='interest-card w-100 bg-warning d-flex flex-column justify-content-center align-items-center
        rounded shadow text-light mt-5'>
          <h1>₹{' '} {interest}</h1>
          <p>Total simple interest</p>
        </div>

        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField type='number' className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined"
              value={principle || ""} onChange={(e) => setPrinciple(e.target.value)} />
          </div>
          <div className='mb-3'>
            <TextField type='number' className='w-100' id="outlined-basic2" label="Rate of Interest (p.a) %" variant="outlined"
              value={rate || ""} onChange={(e) => setRate(e.target.value)} />
          </div>
          <div className='mb-3'>
            <TextField type='number' className='w-100' id="outlined-basic3" label="Time Period (Yr)" variant="outlined"
              value={year || ""} onChange={(e) => setYear(e.target.value)} />
          </div>
          <Stack direction='row' spacing={2}>
            <Button type='submit' style={{ height: '50px', width: '250px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={()=>resetData()} style={{ height: '50px', width: '250px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>

    </div>
  );
}

export default App;
