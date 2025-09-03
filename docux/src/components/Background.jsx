import React from 'react'

const Background = () => {
    return (
        <>
            <div className="fixed w-full h-screen z-[2]">

                <div className='w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl top-[-5%]'>Document.</div>
                <h1 className='select-none text-[10vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900'>DocuX.</h1>
            </div>
        </>
    )
}

export default Background;