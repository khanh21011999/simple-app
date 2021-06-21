import React from 'react'

function Header(){
    const firstname= "Le "
    const lastname= "Quoc Khanh"
    return(
       <header className="navbar">This is a head and my name is {`${firstname} ${lastname}`}</header>
    )
}
export default Header