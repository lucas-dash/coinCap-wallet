import { Icons } from '@/components/ui/Icons';
import Image from 'next/image';

type CoinImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function CoinImage({
  alt,
  src,
  width = 25,
  height = 25,
}: CoinImageProps) {
  const coinIcon = src.includes('?') ? (
    <Icons.coins size={25} />
  ) : (
    <Image src={src} alt={`${alt} badge`} width={width} height={height} />
  );
  return <>{coinIcon}</>;
}
