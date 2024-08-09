import React,{useState} from 'react'
// import crop from '../../images/crop.jpeg'
// import leaf from '../../images/leaf.jpeg'
// import Popup from './Popup'
const History = () => {
    const [openhistory, setopenhistory] = useState(false)
    // const history=[{
    //  "problem": "Leaf Blight",
    //                 "solution": "Apply fungicide and implement integrated pest management practices.",
    //                 "requirements": [
    //                     "Ensure proper drainage and reduce overhead irrigation to keep leaves dry and minimize fungal growth.",
    //                     "Avoid overcrowding of plants to allow adequate air circulation and reduce humidity around plants.",
    //                     "Ensure good air circulation around the plants to prevent the spread of the disease and improve overall plant health.",
    //                     "Prune infected leaves promptly and dispose of them properly to prevent the spread of the disease to healthy plants.",
    //                     "Monitor weather conditions and adjust irrigation practices to avoid creating an environment conducive to leaf blight."
    //                 ],
    // }]

    // const history=[
    //       hist1:{
    //         "id":1,
    //       "image":"123"
    //       }
    // ]

    const openpopup=()=>{
        setopenhistory(true);
    }
  return (
    // <div className='w-screen h-full bg-green-100 ' >
    <div className={` w-screen h-full px-4 pt-4 ${openhistory ? '' : ''}`}>
        <div className='flex'>
            <p className='font-montserrat text-black font-semibold text-lg pt-4 pl-4' >History Of Items </p>
        </div>

        {/* <div className='h-4/6 w-full border border-black'>
            <div></div>
            </div> */}

        <div className='flex px-5 pt-2 '>
        <div className='relative grid grid-rows-2 border border-gray-600 bg-green-50 w-screen rounded-md pl-2 pt-2 h-32 overflow-hidden'>
    <div className='grid grid-cols-12'>
        {/* <div className='col-span-4'>
            <img src={crop} alt='crop' className='rounded-md pr-1 h-28 w-32' />
        </div> */}
        <div className='col-span-8'>
            <p className='text-gray-600 font-montserrat font-bold'>Problem </p>
            <p className='font-kanit'>Leaf Blight</p>
            <p className='text-gray-600 font-montserrat font-bold'>Solution</p>
            <p className='text-gray-800'>Apply fungicide and implement integrated pest management practices.</p>
        </div>
    </div>
    <div className='relative row-span-1 w-full'>
        <div className='absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-50 to-transparent'></div>
        <div className='flex justify-center'>
            <button id='viewMoreBtn' onClick={openpopup} className='mt-10 z-10 font-montserrat text-sm font-bold text-black '>View More</button>
        </div>
    </div>
</div>

        </div>
            {/* <div className='relative'>
            { openhistory&&<Popup setopenhistory={setopenhistory}/>}
            </div> */}

        <div className='flex px-5 pt-4'>
        <div className='relative grid grid-rows-2 border bg-green-50 border-gray-600 w-screen rounded-md pl-2 pt-2 h-32 overflow-hidden'>
    <div className='grid grid-cols-12'>
        {/* <div className='col-span-4'>
            <img src={leaf} alt='crop' className='rounded-md pr-1 h-24 w-28' />
        </div> */}
        <div className='col-span-8'>
            <p className='text-gray-600 font-montserrat font-bold'>Problem</p>
            <p className='font-kanit'>Leaf Blight</p>
            <p className='text-gray-600 font-montserrat font-bold'>Solution</p>
            <p className='text-gray-800'>Apply fungicide and implement integrated pest management practices.</p>
        </div>
    </div>
    <div className='relative row-span-1 w-full'>
        <div className='absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-50 to-transparent'></div>
        <div className='flex justify-center'>
            <button id='viewMoreBtn' className='mt-10 z-10 font-montserrat text-sm font-bold text-black '>View More</button>
        </div>
    </div>
</div>


                        {/* {history.map((i,e)=>{
                                <div key={e+1}>
                                    <div>i.problem</div>
                                </div>
                            })
                        } */}
        </div>
        <div className='flex px-5 pt-4'>
        <div className='relative grid grid-rows-2 bg-green-50 border border-gray-600 w-screen rounded-md pl-2 pt-2 h-32 overflow-hidden'>
    <div className='grid grid-cols-12'>
        {/* <div className='col-span-4'>
            <img src={crop} alt='crop' className='rounded-md pr-1 h-24 w-28' />
        </div> */}
        <div className='col-span-8'>
            <p className='text-gray-600 font-montserrat font-bold'>Problem</p>
            <p className='font-kanit'>Leaf Blight</p>
            <p className='text-gray-600 font-montserrat font-bold'>Solution</p>
            <p className='text-gray-800'>Apply fungicide and implement integrated pest management practices.</p>
        </div>
    </div>
    <div className='relative row-span-1 w-full'>
        <div className='absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-50 to-transparent'></div>
        <div className='flex justify-center'>
            <button id='viewMoreBtn' className='mt-10 z-10 font-montserrat text-sm font-bold text-black '>View More</button>
        </div>
    </div>
</div>


                        {/* {history.map((i,e)=>{
                                <div key={e+1}>
                                    <div>i.problem</div>
                                </div>
                            })
                        } */}
        </div>
        <div className='flex px-5 pt-4'>
        <div className='relative grid grid-rows-2 bg-green-50 border border-gray-600 w-screen rounded-md pl-2 pt-2 h-32 overflow-hidden'>
    <div className='grid grid-cols-12'>
        {/* <div className='col-span-4'>
            <img src={leaf} alt='crop' className='rounded-md pr-1 h-24 w-28' />
        </div> */}
        <div className='col-span-8'>
            <p className='text-gray-600 font-montserrat font-bold'>Problem</p>
            <p className='font-kanit'>Leaf Blight</p>
            <p className='text-gray-600 font-montserrat font-bold'>Solution</p>
            <p className='text-gray-800'>Apply fungicide and implement integrated pest management practices.</p>
        </div>
    </div>
    <div className='relative row-span-1 w-full'>
        <div className='absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-50 to-transparent'></div>
        <div className='flex justify-center'>
            <button id='viewMoreBtn' className='mt-10 z-10 font-montserrat text-sm font-bold text-black '>View More</button>
        </div>
    </div>
</div>


                        {/* {history.map((i,e)=>{
                                <div key={e+1}>
                                    <div>i.problem</div>
                                </div>
                            })
                        } */}
        </div>
    </div>
  )
}

export default History