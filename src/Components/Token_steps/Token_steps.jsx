import React from 'react'
import "./Token_steps.css"

function Token_steps() {
  return (
    <div className='py-4'>
      <div className="container">
        <div>
          <h5 className='blue step_heading text-start'>Steps:</h5>
          <ol>
            <li className='blue text-start'>Your wallet needs a minimum balance (creation fee + gas) to start.</li>
            <li className='blue text-start'>Name your token, symbol</li>
            <li className='blue text-start'>Choose total supply and other required parameters. If you don't enter these values, the default values will be used.</li>
            <li className='blue text-start'>Click Create.</li>
            <li className='blue text-start'>Confirm transaction.</li>
            <li className='blue text-start'>Add your new token to wallet.</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default Token_steps
