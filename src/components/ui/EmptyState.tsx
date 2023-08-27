import Image from 'next/image';

type EmptyStateProps = {
  image: string;
  title: string;
  description: string;
  height?: number;
  width?: number;
};
const EmptyState = ({
  image,
  title,
  description,
  height = 150,
  width = 150,
}: EmptyStateProps) => {
  return (
    <article className="flex items-center justify-center flex-col my-3">
      <div className="dark:bg-background rounded-xl py-3 px-2">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          priority={false}
          className="w-auto h-auto aspect-video"
        />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-typography-detail dark:text-typography-detail-dark text-center">
        {description}
      </p>
    </article>
  );
};

export default EmptyState;
