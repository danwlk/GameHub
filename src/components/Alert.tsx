import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	color?:
		| "primary"
		| "secondary"
		| "danger"
		| "success"
		| "warning"
		| "info"
		| "light"
		| "dark";
	onClose: () => void;
	warning?: string;
}

const Alert = ({ children, color = "primary", onClose, warning }: Props) => {
	return (
		<div
			className={"alert alert-" + color + " alert-dismissible fade show"}
			role="alert"
		>
			<strong>{warning}</strong>
			{" " + children}
			<button
				onClick={onClose}
				type="button"
				className="btn-close"
				data-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
};

export default Alert;
