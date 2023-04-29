import classes from "./EventInfo.module.css";

function EventInfo(props: {
	event: {
		id: number;
		title: string;
		description: string;
		location: string;
		date: string;
		image: string;
		isFeatured: boolean;
	};
}) {
	const { event } = props;

	return (
		<div className={classes.event_info}>
			<div className={classes.event_info__image_container}>
				<img src={`/images/${event.image}`} alt={event.title} />
			</div>
			<div className={classes.event_info__content}>
				<h2 className={classes.event_info__title}>{event.title}</h2>
				<p className={classes.event_info__description}>
					{event.description}
				</p>
				<p className={classes.event_info__location}>{event.location}</p>
				<p className={classes.event_info__date}>{event.date}</p>
			</div>
		</div>
	);
}

export default EventInfo;
