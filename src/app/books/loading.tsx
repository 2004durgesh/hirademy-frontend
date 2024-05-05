import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
    const loadingArr = new Array(9).fill(0)
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {loadingArr.map((_, index) => (
                    <div key={index} className=''>
                        <Skeleton className="w-full h-56 rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default loading