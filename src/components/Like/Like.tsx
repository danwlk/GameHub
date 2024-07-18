import { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
	onClick: () => void;
}

function Like({ onClick }: Props) {
	const [active, setActive] = useState(false);

	const toggle = () => {
		setActive(!active);
		onClick();
	};

	return (
		<div>
			{active ? (
				<AiFillHeart
					color="#FF7F7F"
					onClick={toggle}
					size={50}
				/>
			) : (
				<AiOutlineHeart onClick={toggle} size={50} />
			)}
		</div>
	);
}

export default Like;
