import { Children, ReactNode } from 'react';

const Main = ({children}: { children : ReactNode }) => {
    return (
        <>
            <div className='mx-auto max-w-4xl md:pt-20 border border-white'>
                <div className='p-2 bg-white/10 h-64 backdrop-blur-sm'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Main