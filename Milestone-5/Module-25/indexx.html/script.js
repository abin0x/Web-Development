const apiKey = "85132a085a07035060e0bc83061db6f2b6035c4fe049c3af33579e0d5dd7328d";

document.getElementById('getRoute').addEventListener('click', async () => {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const mode = document.getElementById('mode').value;

    if (!start || !end) {
        alert("Please enter both start and destination!");
        return;
    }

    const url = `https://serpapi.com/search.json?engine=google_maps_directions&start_addr=${encodeURIComponent(start)}&end_addr=${encodeURIComponent(end)}&travel_mode=${mode}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.directions || data.directions.length === 0) {
            document.getElementById('directions').innerHTML = "<p>No route found.</p>";
            return;
        }

        displayDirections(data.directions);
    } catch (err) {
        console.error(err);
        document.getElementById('directions').innerHTML = "<p>Error fetching route. Check console for details.</p>";
    }
});

function displayDirections(directions) {
    const container = document.getElementById('directions');
    container.innerHTML = "";

    directions.forEach((dir, idx) => {
        const div = document.createElement('div');
        div.className = "step";
        div.innerHTML = `
            <h3>Route ${idx + 1} - ${dir.travel_mode}</h3>
            <p><strong>Distance:</strong> ${dir.formatted_distance || (dir.distance/1000 + " km")}</p>
            <p><strong>Duration:</strong> ${dir.formatted_duration || (Math.ceil(dir.duration/60) + " min")}</p>
            ${dir.arrive_around ? `<p><strong>ETA:</strong> ${new Date(dir.arrive_around * 1000).toLocaleTimeString()}</p>` : ""}
            ${dir.trips ? `<strong>Steps:</strong> <ol>${dir.trips.map(trip => `<li>${trip.title} (${trip.formatted_distance || (trip.distance/1000 + " km")})</li>`).join('')}</ol>` : ""}
        `;
        container.appendChild(div);
    });
}
