import React from "react";

function TimeLineItem({ name, year, description, enddate }) {
	return (
		<>
			<div className="timeline-item">
				<div className="timeline-header">
					<p>{`${year} - ${enddate !== undefined ? enddate : 'Present'}`}</p>
					<h3>{name}</h3>
				</div>
				<p>{description}</p>
			</div>
		</>
	);
}

export default TimeLineItem;
