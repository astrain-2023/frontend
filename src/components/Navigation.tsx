import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { GiftIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'

type NavigationProps = {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }: NavigationProps) => {
  return (<div className={cn(className, "w-full bg-gray-800")}>
    <div className="max-w-screen-xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-around items-center text-white">
        <div className="text-center">
          <HomeIcon className="h-6 w-6 mx-auto" />
          <div className="text-xs mt-1">Home</div>
        </div>
        <div className="text-center">
          <GiftIcon className="h-6 w-6 mx-auto" />
          <div className="text-xs mt-1">Rewards</div>
        </div>
        <div className="text-center">
          <CurrencyDollarIcon className="h-6 w-6 mx-auto" />
          <div className="text-xs mt-1">Shop</div>
        </div>
        <div className="text-center">
          <UserCircleIcon className="h-6 w-6 mx-auto" />
          <div className="text-xs mt-1">Profile</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navigation