import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className='text-white flex items-center gap-3 font-semibold cursor-pointer text-xl hover:underline underline-offset-8'>
            <Icon />
            <h2 className='hidden md:block'>{name}</h2>

        </div>
    )
}

export default HeaderItem