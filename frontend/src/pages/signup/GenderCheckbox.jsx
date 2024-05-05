import React from 'react'
import { useState } from 'react'

const GenderCheckbox = ( {onCheckboxChange, selectedGender}) => {

    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='label-text text-white'>Male</span>
                    <input 
                    type='checkbox' 
                    className='checkbox border-pink-500 checked:border-pink-100 [--chkbg:theme(colors.pink.100)] [--chkfg:#E91E63]' 
                    checked={selectedGender === 'male'}
                    onChange={() => onCheckboxChange('male')}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                    <span className='label-text text-white'>Female</span>
                    <input 
                    type='checkbox' 
                    className='checkbox border-pink-500 checked:border-pink-100 [--chkbg:theme(colors.pink.100)] [--chkfg:#E91E63]' 
                    checked={selectedGender === 'female'}
                    onChange={() => onCheckboxChange('female')}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox


// import { useState } from 'react'

// const GenderCheckbox = () => {

//     const [selectedGender, setSelectedGender] = useState(null)

//     const handleCheckboxChange = (gender) => {
//         setSelectedGender(gender === selectedGender ? null : gender)
//     }

//     return (
//         <div className='flex'>
//             <div className='form-control'>
//                 <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'text-pink-600' : ''}`}>
//                     <span className='label-text'>Male</span>
//                     <input 
//                     type='checkbox' 
//                     className='checkbox border-pink-600' 
//                     checked={selectedGender === 'male'}
//                     onChange={() => handleCheckboxChange('male')}
//                     />
//                 </label>
//             </div>
//             <div className='form-control'>
//                 <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'text-pink-600' : ''}`}>
//                     <span className='label-text'>Female</span>
//                     <input 
//                     type='checkbox' 
//                     className='checkbox border-pink-600' 
//                     checked={selectedGender === 'female'}
//                     onChange={() => handleCheckboxChange('female')}
//                     />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox