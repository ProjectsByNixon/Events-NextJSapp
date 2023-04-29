import EventCard from "../EventCard/EventCard";
import classes from "./EventList.module.css";

const EventList = (props: {
	events: {
		id: number;
		title: string;
		description: string;
		location: string;
		date: string;
		image: string;
		isFeatured: boolean;
	}[];
}) => {
	return (
		<div className={classes.event_list}>
			<div className={classes.event_list__container}>
				{props.events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
};

export default EventList;
