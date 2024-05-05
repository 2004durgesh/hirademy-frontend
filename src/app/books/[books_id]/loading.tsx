import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='mx-4'>
        <Skeleton className='w-full h-56 rounded-xl'/>
    </div>

  )
}

export default loading