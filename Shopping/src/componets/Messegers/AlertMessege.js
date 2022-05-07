import React from "react";
import { useSelector } from "react-redux";

const AlertMessege = ({ messege }) => {
	const isMessege = useSelector(state => state.messege.isMessege)
	
	if(isMessege) {
				return (
					<p className="messege" >{messege}</p>
			) 
		}else return(null)
		//isMessege && <p className="messege" >{messege}</p> 
	
}
export default AlertMessege