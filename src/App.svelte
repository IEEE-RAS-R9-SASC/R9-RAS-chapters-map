<script>
	import { onMount, beforeUpdate } from "svelte";
	import L, { marker } from "leaflet";
	import Leaflet from "./Leaflet.svelte";
	import Control from "./Control.svelte";
	import Marker from "./Marker.svelte";
	import Popup from "./Popup.svelte";
	import MapToolbar from "./MapToolbar.svelte";
	import { branch_json_data } from "../assets/data.js";

	let map;

	let markerLocations = [ ];

	const initialView = [-14.217675814717438, -62.02381688557804];

	let eye = true;

	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}

	function resetMapView() {
		map.setView(initialView, 5);
	}

	beforeUpdate(() => {
		for (let key in branch_json_data["chapters"]) {
			let chapter_name = branch_json_data.chapters[key].name;
			let latlong = branch_json_data.chapters[key].latlong;
			markerLocations.push([latlong, chapter_name]);
		}
		console.log(markerLocations);
	});

</script>

<svelte:window on:resize={resizeMap} />

<!-- Can just use an import statement for this, when outside the REPL -->
<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
	integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
	crossorigin=""
/>

<div class="container">
	<h1 id="title">R9 RAS - chapters map</h1>
</div>
<Leaflet bind:map view={initialView} zoom={4}>
	<Control position="topright">
		<MapToolbar bind:eye on:click-reset={resetMapView} />
	</Control>

	{#if eye}
		{#each markerLocations as marker_item}
			<Marker latLng={marker_item[0]} width={30} height={30}>
				<svg
					style="width:30px;height:30px"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					viewBox="0 0 24 24"
					stroke="currentColor"
					>
					<path d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1zm-7 8v-4h-4v4H7V4h10v14h-3z"></path>
   					<path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></path>
				</svg>
				<Popup branch_name={marker_item[1]}>Info:</Popup>
			</Marker>
		{:else}
			<p>Loading</p>
		{/each}
	{/if}
</Leaflet>

<style>
	#title {
		text-align: center;
	}
</style>
