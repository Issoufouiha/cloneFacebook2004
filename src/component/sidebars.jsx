import React from 'react'

export default function Sidebars() {
  return (
    <div>
        <form action="" id='myForm'>
            <div style={{flexDirection:'column'}}>
                <span>Email</span>
                <input type="text" />
            </div>
            <div>
                <span>Password</span>
                <input type="password" />
            </div>
            <div>
                <button>registre</button>
                <button>login</button>
            </div>
        </form>
    </div>
  )
}
