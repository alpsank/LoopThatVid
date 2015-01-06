// Copyright (c) 2014 alpsank. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(tab) 
{ 
	chrome.tabs.update(tab.id, {url: "http://www.endlessvideo.com" + tab.url.split(".com")[1]});
});
