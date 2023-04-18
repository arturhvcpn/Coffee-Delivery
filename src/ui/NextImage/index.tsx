import Image, { StaticImageData } from 'next/image'

interface NextImageProps {
  src: string | StaticImageData
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  blurDataURL?: string
  unoptimized?: boolean
}

function NextImage({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  blurDataURL,
  unoptimized,
}: NextImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      blurDataURL={blurDataURL}
      unoptimized={unoptimized}
    />
  )
}

export { NextImage }
