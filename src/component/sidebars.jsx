import React from 'react'

export default function Sidebars() {
  return (
    <div style={{border:'1px dashed #3b5999', width:'200px', justifyContent:'start'}}>
        <form action="" id='myForm'>
            <div style={{flexDirection:'column'}}>
                <span>Email</span>
                <input type="text" />
            </div>
            <div>
                <span>Password</span>
                <input type="password" />
            </div>
            <div style={{ display : 'flex',gap:'5px', margin:'auto', justifyContent:'center'}}>
                <button>registre</button>
                <button>login</button>
            </div>
        </form>
    </div>
  )
}
