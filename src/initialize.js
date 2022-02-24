function getKitId() {
	var _key = null;
	const scripts = document.getElementsByTagName("script");
	for (var i = 0; i < scripts.length; i++) {
		if (!scripts[i].src) continue;
		var url = new URL(scripts[i].src);
		var scriptParams = Object.fromEntries(url.searchParams);
		if ("kit" in scriptParams) {
			var id = scriptParams["kit"];
			_key = id;
		}
	}
	return _key;
}


window.addEventListener("load", () => {
	var _keyres = getKitId();
	if (_keyres != null) {
		var _preload = _keyres;
		var _easySetup = _keyres != null;
		var _snd = new Snd({ preloadSoundKit: _preload, easySetup: _easySetup });
	}
}, { once: true });