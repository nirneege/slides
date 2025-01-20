// #cover-bg が見つかるまでくりかえし
// #cover-bg が見つかったら、particlesJS を実行
// #cover-bg が見つからなかったら、500ms後に再度実行
const setupParticleBg = () => {
	const coverBg = document.getElementById('cover-bg');
	if (coverBg) {
		particleground(coverBg, {
			density: 10000,
			dotColor: '#aaaaaa',
			lineColor: '#cccccc',
			density: 10000,
			proximity: 100,
			particleRadius: 4,
			curvedLines: false,
			proximity: 100,
			parallax: false,
		});
	}
	else {
		setTimeout(setupParticleBg, 500);
	}
}
setupParticleBg();
