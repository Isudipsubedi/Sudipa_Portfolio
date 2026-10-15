/** <picture> with WebP + JPEG fallback, explicit dimensions (no layout shift). */
type Props = {
  name: string; // base filename in /img, without extension
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  smName?: string; // optional smaller variant for narrow screens
  smWidth?: number;
};

export default function Photo({ name, alt, width, height, className = "", priority = false, smName, smWidth }: Props) {
  const webp = smName ? `/img/${smName}.webp ${smWidth}w, /img/${name}.webp ${width}w` : `/img/${name}.webp`;
  const jpg = smName ? `/img/${smName}.jpg ${smWidth}w, /img/${name}.jpg ${width}w` : `/img/${name}.jpg`;
  const sizes = smName ? `(max-width: 640px) ${smWidth}px, ${width}px` : undefined;
  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/img/${name}.jpg`} srcSet={jpg} sizes={sizes} alt={alt} width={width} height={height}
        loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
