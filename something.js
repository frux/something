(function(){
	var _global = ((typeof window === 'object') ? window : global);

	Object.defineProperty(_global, 'something', {
		get: function(){
			var keys = Object.keys(_global);
			return _global[keys[Math.floor(Math.random()*keys.length)]];
		}
	});
})();