import styles from "./Button.module.css";

interface Props {
	children: string;
	color?: "primary" | "secondary" | "danger";
	onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
	return (
		<div>
			<button
				className={[styles.btn, styles["btn-" + color]].join(" ")}
				type="button"
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
