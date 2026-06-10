"use client";
import React from 'react'
import Image from 'next/image'

interface AvatarProps {
  src: string | undefined | null
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <Image
    className="rounded-full w-6 h-6 md:w-8 md:h-8"
    height="30"
    width="30"
    alt="avatar"
    src={src || '/images/placeholder.jpg'}
    />
  )
}

export default Avatar
