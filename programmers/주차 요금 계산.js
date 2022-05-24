const convertTimeToMinute = (time) => {
	const [hour, minute] = time.split(":");
	return Number(hour) * 60 + Number(minute);
};

function solution(fees, records) {
	const [defaultTime, defaultFee, unitTime, unitFee] = fees;
	const parkingInfo = {};
	const parkingLot = new Map();

	records.map((record) => {
		const [time, carNum, inout] = record.split(" ");
		if (inout === "IN") {
			parkingLot.set(carNum, convertTimeToMinute(time));
		} else if (inout === "OUT") {
			const diff = convertTimeToMinute(time) - parkingLot.get(carNum);
			parkingInfo[carNum] = parkingInfo[carNum] ? parkingInfo[carNum] + diff : diff;
			parkingLot.delete(carNum);
		}
	});

	/* 23:59까지 안 나간 차들 */
	[...parkingLot].map((remain) => {
		const [carNum, time] = remain;
		const diff = convertTimeToMinute("23:59") - parkingLot.get(carNum);
		parkingInfo[carNum] = parkingInfo[carNum] ? parkingInfo[carNum] + diff : diff;
	});

	const result = Object.keys(parkingInfo)
		.sort()
		.map((carNum) => {
			const time = parkingInfo[carNum];
			if (time < defaultTime) {
				return defaultFee;
			} else {
				return defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee;
			}
		});

	return result;
}
