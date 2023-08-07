import React from 'react';

function UserDashboard(props) {

    const category = [
        {id:1, title:'You vs AI'},
        {id:2, title:'Challenge Your friend'},
        {id:3, title:'Sechulde Interview'},
        {id:4, title:'Play Random'},
    ]

    return (
        <div className='flex p-3 '>
            <div className='flex flex-wrap'>
            {category.map((item,index)=>{
                return(
                    <a key={index} href="#" class="m-3 h-fit block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                )
            })}
            </div>
        </div>
    );
}

export default UserDashboard;