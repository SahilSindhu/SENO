var TW = (function(events) { 
    TW.seno ? null : TW.seno={};
    TW.seno.events ? null : TW.seno.events={};
	events.register = (node,eventName,fn) => {
		if(window.addEventListener) {
			node.addEventListener(eventName,fn);
		} else {
			node.attachEvent(eventName,fn);
		}
	};

	return events;	

})(TW || {});
