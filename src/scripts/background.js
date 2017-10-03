'use strict';
/*

var model = TemplatesModel();

var actionHandlers = {
  'active-win': performCopyFromTabs.bind(null, {currentWindow: true}),
  'active-group': performCopyFromTabs.bind(null, {currentWindow: true}),
  'active-tab': performCopyFromTabs.bind(null, {currentWindow: true, active: true}),
  'all-win': performCopyFromTabs.bind(null, {}),
  'images-selection': performCopyAction.bind(null, collectSelectionData, 'img'),
  'links-selection': performCopyAction.bind(null, collectSelectionData, 'a')
};

function init() {
  chrome.runtime.onMessage.addListener(handleMessage);

  getPrefs().then(model.update.bind(model));

  setupUI();
}

function getDefaultPrefs() {
  var prefs = {
    templates: [
      model.createTemplate(0, 'Default', '$url$n'),
      model.createTemplate(1, 'html','<a href="$url">$title</a>$n'),
      model.createTemplate(2, 'forum','[a=$url]$title[/a]$n')
    ],
    defaultTemplateId: 0,
    filterDuplicates: true,
    openTabDelayStepInMillisecs: 800
  };

  return prefs;
}

function getPrefs() {
  return new Promise(function(resolve, reject){

    chrome.storage.local.get('prefs', function(prefs){

      prefs = prefs || {};

      var templates = prefs.templates;

      if (!(templates instanceof Array)) {
        // use default templates
        prefs = getDefaultPrefs();
        chrome.storage.local.set(prefs);
      }

      resolve(prefs);

    });
  });

}

function reportError(err) {
  console.error('Copy Urls Expert: ', err);
}

function performCopyFromTabs(tabSourceParams, request) {
  return collectTabsData(tabSourceParams, request)
            .then(function(groupedTabsData) {
              return processCollectedUrls(groupedTabsData, request.template)
            })
            .catch(reportError);
}

function processCollectedUrls(groupedTabsData, template) {

  return filterDuplicates(groupedTabsData)
    .then(function(groupedTabsData){

      template = template || model.findTemplateById(model.defaultTemplateId);
      var formatter = UrlFormatter(groupedTabsData, template);
      return formatter.format();
    });
}

function performCopyAction(collectorFunction, tabSourceParams, request) {

  return collectorFunction(tabSourceParams, request)
    .then(filterDuplicates)
    .then(function(groupedTabsData){
        var template = request.template || findTemplateById(model.templates, model.defaultTemplateId);
        return applyPattern(groupedTabsData, template);
      });
}

function collectTabsData(tabQueryInfo, request){

  return new Promise(function(resolve, reject){

    chrome.tabs.query(tabQueryInfo, function(tabs) {

      chrome.storage.local.get('usecontenttitle', function(useContentTitle) {

        let tabEntries = [];
        let ignoreHidden = request.action === 'active-group';

        // for every tab return a simple object representing the tab
        tabs.forEach(function(tab){

          if (ignoreHidden && tab.hidden) {
            return;
          }

          var title = useContentTitle && tab.contentTitle? tab.contentTitle : tab.title;
          tabEntries.push({
            title: title,
            url: tab.url
          });

        });

        resolve([tabs]);

      });


    });

  });

}


function collectSelectionData(tagName, request) {
  return new Promise(function(resolve, reject){
    resolve([]);
  });
}

function filterDuplicates(groupedTabsData) {
  return Promise.resolve(groupedTabsData);
}

function handleMessage(request, sender, sendResponseCallback) {

  var targetFunction = actionHandlers[request.action];
  targetFunction(request).then(function(text) {
    sendResponseCallback({
      text: text
    })
  });

  // return true to indicate that sendResponseCallback will be called asynchronously
  return true;
}

init();
*/
