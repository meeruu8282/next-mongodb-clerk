import Image from 'next/image';
import Link from 'next/link';

interface SmallImageCardProps {
  image: string
  cardText?: string
  altImage?: string
  cardLink?: string
}

const SmallImageCard: React.FC<SmallImageCardProps> = ({
  image,
  cardText,
  altImage,
  cardLink
}) => {
  return (
  <Link href={cardLink}>
    <div className="relative cursor-pointer h-full w-full">
        <Image
          fill={true}
          src={image}
          alt={altImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-auto object-cover object-center inset-0 overflow-hidden
          transition group-hover:scale-[1.1] duration-150 ease-out"
        />

        <div className="absolute inset-0 bg-black bg-opacity-[35%] flex
        justify-center items-center p-4">
          <p className="text-xl leading-8 tracking-[-0.02em] whitespace-pre-line
          text-white text-center">
            {cardText}
          </p>
        </div>
    </div>
    </Link>
  )
}

export default SmallImageCard
