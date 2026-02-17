import React from 'react'

function Flex() {
    return (
        <div>

        <div className="sm:flex">
            <div className='border-2 md:bg-amber-300 sm:w-1/2'>1</div>
            <div className='border-2 lg:bg-red-400 sm:w-1/2'>2</div>
        </div>

            <div className="flex">
                <div className='border-2 bg-[rgba(153,47,47,0.74)] w-52 h-52'>1</div>
                <div className='border-2 text-[40px] size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div> 
        {/*
            <div className="flex justify-center">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div>
             <div className="flex justify-end">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div>

              <div className="flex flex-row-reverse">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div>
             <div className="flex flex-col">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div>

              <div className="flex justify-between">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div>
             <div className="flex justify-around">
                <div className='border-2 w-52 h-52'>1</div>
                <div className='border-2 size-52'>2</div>
                <div className='border-2 size-52'>3</div>
            </div> */}

            {/* <div className="flex">
                <div className="w-1/2 border-2">1</div>
                <div className="w-1/2 border-2">2</div>
            </div> */}

            {/* <div className="flex flex-wrap gap-3 justify-center">
                <div className='border-2 size-40'>
                    <img className='blur-sm' style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>
                    <img className='brightness-125' style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>
                    <img className='contrast-200' style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>
                    <img className='grayscale' style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>
                    <img className='hue-rotate-180' style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>
                    <img style={{ width: "100%", height: "100%" }} src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*8thtea*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NzEzMDU3NzckbzYxJGcxJHQxNzcxMzA1NzgyJGo1NSRsMCRoMA.." alt="" />
                </div>
                <div className='border-2 size-40'>1</div>
                <div className='border-2 translate-8 size-40'>2</div>
                <div className='border-2 scale-75 size-40'>3</div>
                <div className='border-2 hover:bg-amber-300 hover:text-4xl hover:text-blue-900 size-40'>1</div>
                <div className='border-2 rotate-45 size-40'>2</div>
                <div className='border-2 selection: size-40'>3</div>
                <div className='border-2 skew-6 size-40'>1</div>
                <div className='border-2 size-40'>2</div>
                <div className='border-2 size-40'>3</div>
                <div className='border-2 size-40'>1</div>
                <div className='border-2 size-40'>2</div>
                <div className='border-2 size-40'>3</div>
            </div> */}

            {/* <div className="grid grid-cols-3 ">
                <div className='border-2 col-span-2 row-span-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
                <div className='border-2'>1</div>
            </div> */}

        </div>
    )
}

export default Flex
