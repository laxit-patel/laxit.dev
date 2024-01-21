import React, { useState } from 'react';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import Section from '../../../components/structure/section';
import Container from '../../../components/structure/container';
import HeroBg from '../../../components/blocks/hero.bg/bg-color-1';
import hero from '../../../styles/sections/index/hero.module.scss';

export default function DateInterval() {
	const [items, setItems] = useState([]);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [title, setTitle] = useState('');

	const calculateInterval = () => {
		if (startDate && endDate && title) {
			const start = new Date(startDate);
			const end = new Date(endDate);

			const newItem = {
				id: items.length + 1, // Unique ID for each item
				group: items.length + 1, // Unique group for each item
				title: title,
				start_time: moment(start),
				end_time: moment(end),
			};

			setItems([...items, newItem]);
			setStartDate('');
			setEndDate('');
			setTitle('');
		} else {
			alert('Please enter all fields.');
		}
	};

	const getTimelineRange = () => {
		const startTimes = items.map((item) => item.start_time);
		const endTimes = items.map((item) => item.end_time);

		const earliestTime = moment.min(startTimes);
		const latestTime = moment.max(endTimes);

		return {
			start: earliestTime.clone().subtract(1, 'months'),
			end: latestTime.clone().add(1, 'months'),
		};
	};

	const timelineRange = getTimelineRange();

	return (
		<>
			<Section classProp={`${hero.section}`}>
				<Container spacing={'VerticalXXXL'}>
					<div>
						<label>Start Date:</label>
						<input
							type="date"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
						/>
					</div>
					<div>
						<label>End Date:</label>
						<input
							type="date"
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
						/>
					</div>
					<div>
						<label>Title:</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<button onClick={calculateInterval}>Add Range</button>
					{items.length > 0 && (
						<div style={{ marginTop: '20px' }}>
							<Timeline
								groups={items.map((item) => ({
									id: item.group,
									title: `Timeline ${item.group}`,
								}))}
								items={items}
								defaultTimeStart={timelineRange.start}
								defaultTimeEnd={timelineRange.end}
								itemHeightRatio={0.75} // Adjust as needed
							/>
						</div>
					)}
				</Container>
				<HeroBg theme="bg-color-1" />
			</Section>
		</>
	);
}
