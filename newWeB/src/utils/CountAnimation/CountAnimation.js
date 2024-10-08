
export const startCountAnimation = (amenitiesData, setCounts, intervalDuration = 10, totalDuration = 2000) => {
    amenitiesData.forEach((item, index) => {
        let start = 0;
        const end = item.amount;
        const increment = end / (totalDuration / intervalDuration);

        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index] = Math.round(start);
                return newCounts;
            });
        }, intervalDuration);
    });
};
