import React from "react";

const Scroll = (props) => {
	return (
		<div
			style={{
				overflowY: "scroll",
				border: "5px solid black",
				height: "900px",
				scrollbarWidth: "none",
				paddingTop: "20px",
			}}
			className='Scroll'>
			{props.children}
		</div>
	);
};

export default Scroll;
