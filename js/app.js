if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
        return this.replace(rtrim, '');
    };
  })();
}

(function(window) {
  function basePath() {
    var regexp = new RegExp('js/app.js');
    var script = $('script').filter(function(i, el) {
      return el.src.match(regexp);
    })[0]

    var base = script.src.substr(window.location.protocol.length + window.location.host.length + 2, script.src.length);

    return base.replace('/js/app.js', '');
  }

  var app = window.angular.module('docs', ['cfp.hotkeys'])

  app.value('pages', {"/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/","version":"local"},"/topics/basics/batches/":{"title":"Batches","summary":"Batches <small class=\"text-muted\">page</small>","path":"/topics/basics/batches/","version":"local"},"/topics/basics/binding_parameters/":{"title":"Binding Parameters","summary":"Binding Parameters <small class=\"text-muted\">page</small>","path":"/topics/basics/binding_parameters/","version":"local"},"/topics/basics/client_side_timestamps/":{"title":"Client-side timestamps","summary":"Client-side timestamps <small class=\"text-muted\">page</small>","path":"/topics/basics/client_side_timestamps/","version":"local"},"/topics/basics/consistency/":{"title":"Consistency","summary":"Consistency <small class=\"text-muted\">page</small>","path":"/topics/basics/consistency/","version":"local"},"/topics/basics/data_types/":{"title":"Data Types","summary":"Data Types <small class=\"text-muted\">page</small>","path":"/topics/basics/data_types/","version":"local"},"/topics/basics/date_and_time/":{"title":"The date and time Types","summary":"The date and time Types <small class=\"text-muted\">page</small>","path":"/topics/basics/date_and_time/","version":"local"},"/topics/basics/futures/":{"title":"Futures","summary":"Futures <small class=\"text-muted\">page</small>","path":"/topics/basics/futures/","version":"local"},"/topics/basics/handling_results/":{"title":"Handling Results","summary":"Handling Results <small class=\"text-muted\">page</small>","path":"/topics/basics/handling_results/","version":"local"},"/topics/basics/keyspaces/":{"title":"Keyspaces","summary":"Keyspaces <small class=\"text-muted\">page</small>","path":"/topics/basics/keyspaces/","version":"local"},"/topics/basics/prepared_statements/":{"title":"Prepared Statements","summary":"Prepared Statements <small class=\"text-muted\">page</small>","path":"/topics/basics/prepared_statements/","version":"local"},"/topics/basics/":{"title":"Basics","summary":"Basics <small class=\"text-muted\">page</small>","path":"/topics/basics/","version":"local"},"/topics/basics/schema_metadata/":{"title":"Schema Metadata","summary":"Schema Metadata <small class=\"text-muted\">page</small>","path":"/topics/basics/schema_metadata/","version":"local"},"/topics/basics/tuples/":{"title":"Tuples","summary":"Tuples <small class=\"text-muted\">page</small>","path":"/topics/basics/tuples/","version":"local"},"/topics/basics/user_defined_types/":{"title":"User Defined Types (UDTs)","summary":"User Defined Types (UDTs) <small class=\"text-muted\">page</small>","path":"/topics/basics/user_defined_types/","version":"local"},"/topics/basics/uuids/":{"title":"UUIDs","summary":"UUIDs <small class=\"text-muted\">page</small>","path":"/topics/basics/uuids/","version":"local"},"/topics/building/":{"title":"Building","summary":"Building <small class=\"text-muted\">page</small>","path":"/topics/building/","version":"local"},"/topics/configuration/":{"title":"Configuration","summary":"Configuration <small class=\"text-muted\">page</small>","path":"/topics/configuration/","version":"local"},"/topics/configuration/retry_policies/":{"title":"Retry policies","summary":"Retry policies <small class=\"text-muted\">page</small>","path":"/topics/configuration/retry_policies/","version":"local"},"/topics/faq/":{"title":"FAQ","summary":"FAQ <small class=\"text-muted\">page</small>","path":"/topics/faq/","version":"local"},"/topics/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/topics/logging/","version":"local"},"/topics/metrics/":{"title":"Metrics","summary":"Metrics <small class=\"text-muted\">page</small>","path":"/topics/metrics/","version":"local"},"/topics/":{"title":"Getting Started","summary":"Getting Started <small class=\"text-muted\">page</small>","path":"/topics/","version":"local"},"/topics/security/":{"title":"Security","summary":"Security <small class=\"text-muted\">page</small>","path":"/topics/security/","version":"local"},"/topics/security/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">page</small>","path":"/topics/security/ssl/","version":"local"},"/topics/testing/ccm/":{"title":"Cassandra Cluster Manager (CCM)","summary":"Cassandra Cluster Manager (CCM) <small class=\"text-muted\">page</small>","path":"/topics/testing/ccm/","version":"local"},"/topics/testing/configuration/":{"title":"Configuration","summary":"Configuration <small class=\"text-muted\">page</small>","path":"/topics/testing/configuration/","version":"local"},"/topics/testing/":{"title":"Testing","summary":"Testing <small class=\"text-muted\">page</small>","path":"/topics/testing/","version":"local"},"/topics/testing/running/":{"title":"Running","summary":"Running <small class=\"text-muted\">page</small>","path":"/topics/testing/running/","version":"local"},"/api/cassandra.h/":{"title":"cassandra.h","summary":"cassandra.h <small class=\"text-muted\">file</small>","path":"/api/cassandra.h/","version":"local"},"/api/struct.CassAggregateMeta/":{"title":"CassAggregateMeta","summary":"CassAggregateMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassAggregateMeta/","version":"local"},"/api/struct.CassBatch/":{"title":"CassBatch","summary":"CassBatch <small class=\"text-muted\">struct</small>","path":"/api/struct.CassBatch/","version":"local"},"/api/struct.CassCluster/":{"title":"CassCluster","summary":"CassCluster <small class=\"text-muted\">struct</small>","path":"/api/struct.CassCluster/","version":"local"},"/api/struct.CassCollection/":{"title":"CassCollection","summary":"CassCollection <small class=\"text-muted\">struct</small>","path":"/api/struct.CassCollection/","version":"local"},"/api/struct.CassColumnMeta/":{"title":"CassColumnMeta","summary":"CassColumnMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassColumnMeta/","version":"local"},"/api/struct.CassCustomPayload/":{"title":"CassCustomPayload","summary":"CassCustomPayload <small class=\"text-muted\">struct</small>","path":"/api/struct.CassCustomPayload/","version":"local"},"/api/struct.CassDataType/":{"title":"CassDataType","summary":"CassDataType <small class=\"text-muted\">struct</small>","path":"/api/struct.CassDataType/","version":"local"},"/api/struct.CassErrorResult/":{"title":"CassErrorResult","summary":"CassErrorResult <small class=\"text-muted\">struct</small>","path":"/api/struct.CassErrorResult/","version":"local"},"/api/struct.CassFunctionMeta/":{"title":"CassFunctionMeta","summary":"CassFunctionMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassFunctionMeta/","version":"local"},"/api/struct.CassFuture/":{"title":"CassFuture","summary":"CassFuture <small class=\"text-muted\">struct</small>","path":"/api/struct.CassFuture/","version":"local"},"/api/struct.CassIndexMeta/":{"title":"CassIndexMeta","summary":"CassIndexMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassIndexMeta/","version":"local"},"/api/struct.CassInet/":{"title":"CassInet","summary":"CassInet <small class=\"text-muted\">struct</small>","path":"/api/struct.CassInet/","version":"local"},"/api/struct.CassIterator/":{"title":"CassIterator","summary":"CassIterator <small class=\"text-muted\">struct</small>","path":"/api/struct.CassIterator/","version":"local"},"/api/struct.CassKeyspaceMeta/":{"title":"CassKeyspaceMeta","summary":"CassKeyspaceMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassKeyspaceMeta/","version":"local"},"/api/struct.CassLogMessage/":{"title":"CassLogMessage","summary":"CassLogMessage <small class=\"text-muted\">struct</small>","path":"/api/struct.CassLogMessage/","version":"local"},"/api/struct.CassMaterializedViewMeta/":{"title":"CassMaterializedViewMeta","summary":"CassMaterializedViewMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassMaterializedViewMeta/","version":"local"},"/api/struct.CassMetrics/":{"title":"CassMetrics","summary":"CassMetrics <small class=\"text-muted\">struct</small>","path":"/api/struct.CassMetrics/","version":"local"},"/api/struct.CassPrepared/":{"title":"CassPrepared","summary":"CassPrepared <small class=\"text-muted\">struct</small>","path":"/api/struct.CassPrepared/","version":"local"},"/api/struct.CassResult/":{"title":"CassResult","summary":"CassResult <small class=\"text-muted\">struct</small>","path":"/api/struct.CassResult/","version":"local"},"/api/struct.CassRetryPolicy/":{"title":"CassRetryPolicy","summary":"CassRetryPolicy <small class=\"text-muted\">struct</small>","path":"/api/struct.CassRetryPolicy/","version":"local"},"/api/struct.CassRow/":{"title":"CassRow","summary":"CassRow <small class=\"text-muted\">struct</small>","path":"/api/struct.CassRow/","version":"local"},"/api/struct.CassSchemaMeta/":{"title":"CassSchemaMeta","summary":"CassSchemaMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassSchemaMeta/","version":"local"},"/api/struct.CassSession/":{"title":"CassSession","summary":"CassSession <small class=\"text-muted\">struct</small>","path":"/api/struct.CassSession/","version":"local"},"/api/struct.CassSsl/":{"title":"CassSsl","summary":"CassSsl <small class=\"text-muted\">struct</small>","path":"/api/struct.CassSsl/","version":"local"},"/api/struct.CassStatement/":{"title":"CassStatement","summary":"CassStatement <small class=\"text-muted\">struct</small>","path":"/api/struct.CassStatement/","version":"local"},"/api/struct.CassTableMeta/":{"title":"CassTableMeta","summary":"CassTableMeta <small class=\"text-muted\">struct</small>","path":"/api/struct.CassTableMeta/","version":"local"},"/api/struct.CassTimestampGen/":{"title":"CassTimestampGen","summary":"CassTimestampGen <small class=\"text-muted\">struct</small>","path":"/api/struct.CassTimestampGen/","version":"local"},"/api/struct.CassTuple/":{"title":"CassTuple","summary":"CassTuple <small class=\"text-muted\">struct</small>","path":"/api/struct.CassTuple/","version":"local"},"/api/struct.CassUserType/":{"title":"CassUserType","summary":"CassUserType <small class=\"text-muted\">struct</small>","path":"/api/struct.CassUserType/","version":"local"},"/api/struct.CassUuid/":{"title":"CassUuid","summary":"CassUuid <small class=\"text-muted\">struct</small>","path":"/api/struct.CassUuid/","version":"local"},"/api/struct.CassUuidGen/":{"title":"CassUuidGen","summary":"CassUuidGen <small class=\"text-muted\">struct</small>","path":"/api/struct.CassUuidGen/","version":"local"},"/api/struct.CassValue/":{"title":"CassValue","summary":"CassValue <small class=\"text-muted\">struct</small>","path":"/api/struct.CassValue/","version":"local"},"/api/struct.CassVersion/":{"title":"CassVersion","summary":"CassVersion <small class=\"text-muted\">struct</small>","path":"/api/struct.CassVersion/","version":"local"},"/api/":{"title":"API docs","summary":"API docs <small class=\"text-muted\">index</small>","path":"/api/","version":"local"}})
  app.factory('basePath', basePath)
  app.provider('search', function() {
    function localSearchFactory($http, $timeout, $q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var fetch = $http.get(basePath + '/json/search-index.json')
                       .then(function(response) {
                         var index = lunr.Index.load(response.data)
                         $rootScope.searchReady = true;
                         return index;
                       });

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      // (In this case we just resolve the promise immediately as it is not
      // inherently an async process)
      return function(q) {
        return fetch.then(function(index) {
          var results = []
          index.search(q).forEach(function(hit) {
            results.push(hit.ref);
          });
          return results;
        })
      };
    };
    localSearchFactory.$inject = ['$http', '$timeout', '$q', '$rootScope', 'basePath'];

    function webWorkerSearchFactory($q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var searchIndex = $q.defer();
      var results;
      var worker = new Worker(basePath + '/js/search-worker.js');

      // The worker will send us a message in two situations:
      // - when the index has been built, ready to run a query
      // - when it has completed a search query and the results are available
      worker.onmessage = function(e) {
        switch(e.data.e) {
          case 'ready':
            worker.postMessage({ e: 'load', p: basePath });
            break
          case 'index-ready':
            $rootScope.$apply(function() {
              $rootScope.searchReady = true;
            })
            searchIndex.resolve();
            break;
          case 'query-ready':
            results.resolve(e.data.d);
            break;
        }
      };

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      return function(q) {

        // We only run the query once the index is ready
        return searchIndex.promise.then(function() {

          results = $q.defer();
          worker.postMessage({ e: 'search', q: q });
          return results.promise;
        });
      };
    };
    webWorkerSearchFactory.$inject = ['$q', '$rootScope', 'basePath'];

    return {
      $get: window.Worker ? webWorkerSearchFactory : localSearchFactory
    };
  })

  app.controller('search', [
    '$scope',
    '$sce',
    '$timeout',
    'search',
    'pages',
    'basePath',
    function($scope, $sce, $timeout, search, pages, basePath) {
      $scope.hasResults = false;
      $scope.results = null;
      $scope.current = null;

      function clear() {
        $scope.hasResults = false;
        $scope.results = null;
        $scope.current = null;
      }

      $scope.search = function(version) {
        if ($scope.q.length >= 2) {
          search($scope.q).then(function(ids) {
            var results = []

            ids.forEach(function(id) {
              var page = pages[id];

              if (page.version == version) {
                results.push(page)
              }
            })

            if (results.length > 0) {
              $scope.hasResults = true;
              $scope.results = results;
              $scope.current = 0;
            } else {
              clear()
            }
          })
        } else {
          clear()
        }
      };

      $scope.basePath = basePath;

      $scope.reset = function() {
        $scope.q = null;
        clear()
      }

      $scope.submit = function() {
        var result = $scope.results[$scope.current]

        if (result) {
          $timeout(function() {
            window.location.href = basePath + result.path;
          })
        }
      }

      $scope.summary = function(item) {
        return $sce.trustAsHtml(item.summary);
      }

      $scope.moveDown = function(e) {
        if ($scope.hasResults && $scope.current < ($scope.results.length - 1)) {
          $scope.current++
          e.stopPropagation()
        }
      }

      $scope.moveUp = function(e) {
        if ($scope.hasResults && $scope.current > 0) {
          $scope.current--
          e.stopPropagation()
        }
      }
    }
  ])

  app.directive('search', [
    '$document',
    'hotkeys',
    function($document, hotkeys) {
      return function(scope, element, attrs) {
        hotkeys.add({
          combo: '/',
          description: 'Search docs...',
          callback: function(event, hotkey) {
            event.preventDefault()
            event.stopPropagation()
            element[0].focus()
          }
        })
      }
    }
  ])

  $(function() {
    $('#content').height(
      Math.max(
        $(".side-nav").height(),
        $('#content').height()
      )
    );

    $('#table-of-contents').on('activate.bs.scrollspy', function() {
      var active = $('#table-of-contents li.active').last().children('a');
      var button = $('#current-section');
      var text   = active.text().trim();

      if (active.length == 0 || text == 'Page Top') {
        button.html('Jump to... <span class="caret"></span><span class="sr-only">Table of Contents</span>')
      } else {
        if (text.length > 30) {
          text = text.slice(0, 30) + '...'
        }
        button.html('Viewing: ' + text + ' <span class="caret"></span><span class="sr-only">Table of Contents</span>')
      }
    })

    // Config ZeroClipboard
    ZeroClipboard.config({
      swfPath: basePath() + '/flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover',
      activeClass: 'btn-clipboard-active'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(btnHtml)
    })

    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))

    // Handlers for ZeroClipboard

    // Copy to clipboard
    zeroClipboard.on('copy', function (event) {
      var clipboard = event.clipboardData;
      var highlight = $(event.target).parent().nextAll('.highlight').first()
      clipboard.setData('text/plain', highlight.text())
    })

    // Notify copy success and reset tooltip title
    zeroClipboard.on('aftercopy', function (event) {
      $(event.target)
        .attr('title', 'Copied!')
        .tooltip('fixTitle')
        .tooltip('show')
    })

    // Notify copy failure
    zeroClipboard.on('error', function (event) {
      $(event.target)
        .attr('title', 'Flash required')
        .tooltip('fixTitle')
        .tooltip('show')
    })
  })
})(window)
