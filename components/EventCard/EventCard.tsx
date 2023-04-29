import classes from "./EventCard.module.css";

const EventCard = (props: {
	event: {
		id: number;
		title: string;
		date: string;
		image: string;
		location: string;
	};
}) => {
	const { event } = props;
	return (
		<a href={`/events/${event.id}`} className={classes.event_card}>
			<div className={classes.event_card__image_container}>
				<img src={`/images/${event.image}`} alt="Event Image" />
			</div>
			<div className={classes.event_card__content}>
				<h2 className={classes.event_card__title}>{event.title}</h2>
				<p className={classes.event_card__date}>{event.date}</p>
				<p className={classes.event_card__location}>{event.location}</p>
			</div>
		</a>
	);
};

export default EventCard;
