// select from the dom
const results = document.querySelector('.results');
const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('.search-input');
const wrapper = document.querySelector('.wrapper');
let searchTerm;
let errorMessage;

searchForm.addEventListener('submit', e => {
	e.preventDefault();
	removePrevResults();
	displayTvShows();
	removePrevErrMsg();
	searchInput.value = '';
});

// fetch the tv shows
const getTvShows = async () => {
	searchTerm = searchInput.value;

	try {
		if (searchTerm) {
			const res = await axios.get(
				`https://api.tvmaze.com/search/shows?q=${searchTerm}`,
			);
			return res.data;
		} else {
			const randomNames = [
				'bat',
				'cat',
				'rat',
				'chicken',
				'girls',
				'girl',
				'me',
			];
			const randomName =
				randomNames[Math.floor(Math.random() * randomNames.length)];
			const res = await axios.get(
				`https://api.tvmaze.com/search/shows?q=${randomName}`,
			);
			return res.data;
		}
	} catch (err) {
		console.log('Errror:', err);
	}
};

// display shows
const displayTvShows = async () => {
	const showsData = await getTvShows();
	if (showsData.length > 0) {
		for (const shows of showsData) {
			const show = shows.show;
			const result = document.createElement('div');
			result.classList.add('result');

			const tvShowImg = document.createElement('img');
			tvShowImg.classList.add('tv-show-img');
			if (show.image) {
				tvShowImg.src = show.image.medium;
			} else {
				tvShowImg.src = './no-image.svg';
			}

			const tvShowAbout = document.createElement('div');
			tvShowAbout.classList.add('tv-show-about');

			const tvShowTitle = document.createElement('h4');
			tvShowTitle.classList.add('tv-show-title');
			tvShowTitle.innerText = show.name;

			const rating = document.createElement('p');
			rating.classList.add('rating');
			if (show.rating.average) {
				rating.innerText = show.rating.average;
			} else {
				rating.innerText = 'No Rating';
			}
			const Genres = document.createElement('p');
			if (show.genres.length > 0) {
				Genres.innerHTML += 'Genres <br>';
				for (const genre of show.genres) {
					Genres.innerHTML += `
      ${genre} `;
				}
			} else {
				Genres.innerHTML += ` 
      No Genres Specified `;
			}

			tvShowAbout.append(tvShowTitle, rating, Genres);
			result.append(tvShowImg, tvShowAbout);
			results.append(result);
		}
	} else if (showsData.length === 0) {
		errorMessage = document.createElement('h2');
		errorMessage.style.color = '#000';
		errorMessage.classList.add('errorMessage');
		errorMessage.innerHTML = `Sorry we could not find <i>${searchTerm.toUpperCase()}</i> show name :(`;

		wrapper.appendChild(errorMessage);
	}
};

displayTvShows();

// remove the old results to replace new results
const removePrevResults = () => {
	const removePrevResults = [...results.children];
	for (const removePrevResult of removePrevResults) {
		removePrevResult.remove();
	}
};

// remove the previous error message
const removePrevErrMsg = () => {
	const children = wrapper.children;
	for (const child of children) {
		const errMsg = child.getAttribute('class') === 'errorMessage';
		if (errMsg) {
			wrapper.removeChild(errorMessage);
		}
	}
};
