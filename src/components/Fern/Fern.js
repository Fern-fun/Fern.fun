import { Parallax } from "react-scroll-parallax";
import "./Fern.scss";

const Fern = (props) => {
	const imgHeight = props.height;
	const imgLeft = props.left;
	const imgRight = props.right;
	const imgTop = props.top;
	const imgBottom = props.bottom;
	const imgRotate = props.rotate;

	const style = {
		height: imgHeight,
		left: imgLeft,
		top: imgTop,
		right: imgRight,
		bottom: imgBottom,
		transform: `rotate(${imgRotate})`,
		position: "absolute"
	};

	return (
		<Parallax>
			<img src="./images/fern.svg" id="fernImg" alt="" style={style} />
		</Parallax>
	);
};

export default Fern;
