

const Button = ({ className, children }) => {
	return <button className={`${className} rounded-md cursor-pointer `}>{children}</button>;
};

export default Button;
