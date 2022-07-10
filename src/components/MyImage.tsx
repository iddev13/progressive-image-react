import { FC, useState, useEffect } from "react";

interface IMyImage {
	src: string
	placeholder: string
	width: string
	height: string
	alt?: string
}


const MyImage: FC<IMyImage> = ({
	src,
	placeholder,
	width,
	height,
	alt
}) => {

	const [imageSrc, setImageSrc] = useState(placeholder);
	const cn = `progressiveImage ${imageSrc === placeholder ? 'loading' : 'loaded'}`

	useEffect(() => {
		const image = new Image()
		image.src = src
		image.onload = () => {
			setImageSrc(src)
		}
	}, [src])


	return (
		<div>
			<img
				className={cn}
				src={imageSrc}
				width={width}
				height={height}
				alt={alt}
			/>
		</div>
	)
}

export default MyImage;