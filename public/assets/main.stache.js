(function(window) {
 can.stache('main_components_add-server_add-server-btn_stache', "</content >");
can.stache('main_components_add-server_add-server_stache', "<!-- Add Server Modal -->\n<div class=\"modal fade\" id=\"addServerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addServerModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t<h4>Add Server</h4>\n        <ul class=\"nav nav-pills\">\n          <li role=\"presentation\" class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">\n              MongoDB <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n\t\t          <li><a href=\"#\">MySQL</a></li>\n\t\t        </ul>\n          </li>\n        </ul>\n\n        {{! <h4 class=\"modal-title\" id=\"myModalLabel\">Add Server</h4> }}\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"connectionString\">Connection String</label>\n            <input type=\"text\" class=\"form-control\" id=\"connectionString\" placeholder=\"MongoDB Connection String\" can-value=\"connectionString\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"hostname\">Hostname</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"hostname\" can-value=\"host\">\n          </div>\n          <button type=\"submit\" class=\"hidden btn btn-default\">Add Server</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" can-click=\"saveServer\">Add Server</button>\n      </div>\n    </div>\n  </div>\n</div>");
can.stache('main_components_db-selector_server-status_stache', "{{loading}}\n\n<h4>Server Status <i class=\"mdi-action-autorenew pull-right {{#if spin}}spinner{{/if}}\" can-click=\"refresh\"></i></h4>\n{{#stats}}\n<dl>\n  <dt>Hostname</dt>\n  <dd>{{host}}</dd>\n\n  <dt>MongoDB Version</dt>\n  <dd>{{version}}</dd>\n\n  <dt>Uptime</dt>\n  <dd>{{secondsHumanize uptime}}</dd>\n\n  <dt>Server Time</dt>\n  <dd>{{localTime}}</dd>\n</dl>\n\n{{#connections}}\n<dl>\n  <dt>Connections</dt>\n  <dd>Current: {{current}}<br/>Available: {{available}}</dd>\n</dl>\n{{/connections}}\n\n{{#globalLock}}\n  {{#activeClients}}\n  <dl>\n    <dt>Clients</dt>\n    <dd>Active: {{number total}} <br/>  Read Lock: {{number readers}} <br/>  Write Lock: {{number writers}}</dd>\n  </dl>\n  {{/activeClients}}\n\n  {{#currentQueue}}\n  <dl>\n    <dt>Queues</dt>\n    <dd>Operations: {{number total}} <br/>  Read Lock: {{number readers}} <br/>  Write Lock: {{number writers}}</dd>\n  </dl>\n  {{/currentQueue}}\n{{/globalLock}}\n\n{{#opcounters}}\n<dl>\n  <dt>Operation Counts</dt>\n  <dd>Inserts: {{number insert}} <br/>  Queries: {{number query}} <br/>  Updates: {{number update}} <br/>  Deletes: {{number delete}}</dd>\n</dl>\n{{/opcounters}}\n\n{{#backgroundFlushing}}\n<dl>\n  <dt>Flush Count</dt>\n  <dd>{{number flushes}}</dd>\n\n  <dt>Last Flush</dt>\n  <dd>{{last_finished}}</dd>\n\n  <dt>Time Spent</dt>\n  <dd>{{last_ms}} ms</dd>\n\n  <dt>Average Time</dt>\n  <dd>{{number average_ms 4}} ms</dd>\n</dl>\n{{/backgroundFlushing}}\n\n{{/stats}}");
can.stache('main_components_page-collection_code-editor_code-editor_stache', "<div class=\"record\">\n  <div id=\"editor{{index @index}}\" class=\"editor\" {{codemirror document}}>\n    <i class=\"delete mdi-content-clear pull-right\"></i>\n    <p class=\"_id\">{{id}}</p>\n  </div>\n</div>\n");
can.stache('main_components_page-collection_page-collection_stache', "{{#appState}}\n<div class=\"row\">\n  <div class=\"col-sm-9 main collection\">\n\n    <div class=\"page-header\">\n\n      <div class=\"breadcrumbs\">\n        <a href=\"javascript:void(0)\" can-click=\"goHome\"><i class=\"mdi-action-dns\"></i></a>\n        <span> / </span>\n\n        <a href=\"javascript:void(0)\" can-click=\"gotoServer\">{{hostname}}</a>\n        <span> / </span>\n\n        {{#database}}\n        <a href=\"javascript:void(0)\" can-click=\"gotoDB\">{{db}}</a>\n        {{/database}}\n        <span> / </span>\n      </div>\n\n      {{#collection}}\n      <h1>{{name}}</h1>\n      {{/collection}}\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right add\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-content-add add-button\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n    <query-builder></query-builder>\n\n\n    <div class=\"view-tools pull-right\">\n      <ul class=\"nav nav-pills pull-right\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-content-remove-circle-outline\"></i></a></li>\n      </ul>\n\n      <ul class=\"nav nav-pills pull-right list\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-list\"></i></a></li>\n      </ul>\n\n      <ul class=\"nav nav-pills pull-right list\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-agenda\"></i></a></li>\n      </ul>\n    </div>\n    {{#collection}}\n    {{#if stats}}\n\n      <p id=\"editable\" class=\"records-summary\"><strong>1-10</strong> of <strong>{{#stats}}{{count}}{{/stats}}</strong> documents</p>\n    {{else}}\n      <p id=\"editable\" class=\"records-summary\">no documents</p>\n    {{/if}}\n    {{/collection}}\n\n    <div class=\"records\">\n\n      {{#each documents}}\n      <code-editor document=\"{.}\"></code-editor>\n      {{/each}}\n\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 sidebar\">\n    <h4>Collections <i class=\"mdi-action-autorenew pull-right\"></i><i class=\"mdi-content-add pull-right\"></i></h4>\n    <ul class=\"nav nav-sidebar\">\n      <li><a href=\"\">account_shared_names</a></li>\n      <li><a href=\"\">accounts</a></li>\n      <li><a href=\"\">assets</a></li>\n      <li><a href=\"\">budget</a></li>\n      <li><a href=\"\">calendar</a></li>\n      <li><a href=\"\">categories</a></li>\n      <li><a href=\"\">contacts</a></li>\n      <li><a href=\"\">credit_scores</a></li>\n      <li><a href=\"\">debt</a></li>\n      <li><a href=\"\">labels</a></li>\n      <li><a href=\"\">planning</a></li>\n      <li><a href=\"\">preferences</a></li>\n      <li><a href=\"\">reports</a></li>\n      <li><a href=\"\">sessions</a></li>\n      <li><a href=\"\">system.indexes</a></li>\n      <li><a href=\"\">system.users</a></li>\n\n      <li class=\"trash\">\n        <a href=\"javascript:void(0)\">\n          <i class=\"mdi-action-delete\"></i>\n          Trash\n          <i class=\"mdi-content-clear pull-right\" data-toggle=\"modal\" data-target=\"#myModal\"></i>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Empty Trash?</h4>\n      </div>\n      <div class=\"modal-body\">\n        This will drop the <strong class=\"text-700\">z.mongo-express.trash</strong> collection and all documents in it.  This cannot be undone.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Empty Trash</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- END CONTENT -->\n\n\n<script>\n\n\n\n\n\n</script>\n\n{{/appState}}\n{{refreshCodemirror}}");
can.stache('main_components_page-collection_query-builder_query-builder_stache', "<div class=\"query-wrapper\">\n  <form class=\"form\" role=\"form\">\n\n    <div class=\"query\">\n      <!-- Find --><span class=\"find\"><span>find({</span><span contenteditable class=\"editable params\"></span><span>}<span class=\"fields\">,{<span contenteditable class=\"editable\"></span>}</span>)</span></span>\n      <!-- Skip <--><span class=\"skip query-block\"></--><span>.skip(</span><span contenteditable class=\"editable\">10</span><span>)</span></span>\n      <!-- Limit <--><span class=\"limit query-block\"></--><span>.limit(</span><span contenteditable class=\"editable\">10</span><span>)</span></span>\n      <!-- Explain --><span class=\"explain query-block\">.explain()</span>\n    </div>\n\n    <div class=\"row query-bottom\">\n      <div class=\"col-md-10\">\n        <ul class=\"query-options\">\n          <li>fields</li>\n          <li>skip</li>\n          <li>limit</li>\n          <li>explain</li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\">Run</button>\n      </div>\n    </div>\n\n  </form>\n</div>");
can.stache('main_components_page-database_add-collection_add-collection_stache', "{{#newCollection}}\n\n<div class=\"query-wrapper\">\n  <form class=\"form\" role=\"form\" can-submit=\"create\">\n\n    <div class=\"query\">\n      <!-- Find --><span class=\"createCollection\"><span>db.createCollection('</span><span contenteditable class=\"editable name\" can-value=\"name\" can-keypress=\"noEnter\"></span><span>')\n    </div>\n\n    <div class=\"row query-bottom\">\n      <div class=\"col-md-10\">\n        <ul class=\"query-options\">\n          <li>capped</li>\n          <li>autoIndexId</li>\n          <li>size</li>\n          <li>max</li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\">Run</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n{{/newCollection}}");
can.stache('main_components_page-database_drop-collection_drop-collection_stache', "{{#col}}\n<!-- Add Server Modal -->\n<div class=\"modal fade\" id=\"deleteCollectionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteCollectionModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Drop the <strong>{{name}}</strong> collection?</h4>\n      </div>\n      <div class=\"modal-body\">\n      {{#stats}}\n        {{#if count}}\n        This will also delete the <strong>{{count}} {{plural count}}</strong> in the collection. This cannot be undone.\n        {{else}}\n        The collection is empty. No documents will be deleted.\n        {{/if}}\n      {{/stats}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" can-click=\"deleteCollection\">Delete Collection</button>\n      </div>\n    </div>\n  </div>\n</div>\n{{/col}}");
can.stache('main_components_page-database_page-database_stache', "{{#appState}}\n<div class=\"row\">\n\n  <div class=\"col-sm-9 main\">\n    <div class=\"page-header\">\n\n      <div class=\"breadcrumbs\">\n        <a href=\"javascript:void(0)\" can-click=\"goHome\"><i class=\"mdi-action-dns\"></i></a>\n        <span> / </span>\n        <a href=\"javascript:void(0)\" can-click=\"gotoServer\">{{hostname}}</a>\n        <span> / </span>\n\n      </div>\n\n      {{#database}}\n      <h1>{{db}}</h1>\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right search\">\n          <li><a id=\"add-col-btn\" class=\"{{#if addCollection}}open{{/if}}\" href=\"javascript:void(0)\" can-click=\"toggleAddCollection\"><i class=\"mdi-content-add\"></i></a></li>\n        </ul>\n      </div>\n\n    </div>\n\n    <p>{{collectionCount}} collections</p>\n    {{/database}}\n  </div>\n\n  {{#if addCollection}}\n    <add-collection></add-collection>\n  {{/if}}\n\n  <div class=\"table-responsive collection-table\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th># Documents</th>\n        </tr>\n      </thead>\n      <tbody>\n      {{#each collections}}\n        <tr>\n          <td>{{index @index}}</td>\n          <td>\n            {{#if editing}}\n              <input type=\"text\" can-value=\"name\" can-enter=\"saveCollection\" can-keydown=\"escape\"></input>\n              <a href=\"javascript:void(0)\" can-click=\"saveCollection\" class=\"btn-edit-collection\"><i class=\"mdi-action-done\"></i></a>\n              <a href=\"javascript:void(0)\" can-click=\"cancel\" class=\"btn-edit-collection\"><i class=\"mdi-content-clear\"></i></a>\n            {{else}}\n              <a href=\"javascript:void(0)\" can-click=\"openCollection\">{{name}}</a>\n              <a href=\"javascript:void(0)\" can-click=\"editCollection\" class=\"btn-edit-collection\"><i class=\"mdi-editor-mode-edit\"></i></a>\n            {{/if}}\n          </td>\n          <td>\n            {{#if stats}}\n              {{#stats}}\n              {{count}}\n              {{/stats}}\n            {{else}}\n              0\n            {{/if}}\n            <span class=\"table-tools pull-right\">\n              <a href=\"\" class=\"btn-download\">Export</a>\n              <a href=\"\" class=\"mdi-material-red delete-button\" data-toggle=\"modal\" data-target=\"#deleteCollectionModal\" can-click=\"changeCollection\">Delete</a>\n            </span>\n          </td>\n        </tr>\n      {{/each collections}}\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 sidebar\">\n    <h4>Users <i class=\"mdi-action-autorenew pull-right\"></i><i class=\"mdi-content-add pull-right\"></i></h4>\n    <ul class=\"nav nav-sidebar user-list\">\n      <li>\n        <a href=\"\">marshall  <i class=\"mdi-editor-mode-edit pull-right\"></i></a>\n      </li>\n    </ul>\n\n    <h4>Data Usage <i class=\"mdi-action-autorenew pull-right\"></i></h4>\n    <table class=\"sidebar-table\">\n      <tr>\n        <td>dataSize</td>\n        <td>1.16 KB</td>\n      </tr>\n      <tr>\n        <td>indexSize</td>\n        <td>47.9 KB</td>\n      </tr>\n      <tr>\n        <td>fileSize</td>\n        <td>16 MB</td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n{{/appState}}\n<drop-collection col=\"{localColl}\"></drop-collection>\n");
can.stache('main_components_page-home_page-home_stache', "{{#appState}}\n\n<div class=\"row\">\n\n  <div class=\"col-sm-3 col-md-2 sidebar\">\n    <servers-sidebar></servers-sidebar>\n  </div>\n\n  <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2\">\n\n    <div class=\"page-header\">\n      <h1>Favorites</h1>\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right view-toggle text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-list\"></i></a></li>\n          <li class=\"active\"><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-module\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right labels text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-label-outline\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right search text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-search\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- BEGIN FAVORITES -->\n    <div class=\"row\">\n      <div class=\"tiles col-md-12\">\n        {{#each databases}}\n          {{#if favorite}}\n            <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\" can-click=\"selectDB\">\n              <div class=\"tile-inner\">\n\n                <header class=\"tile-tools\">\n                  <span class=\"tile-group-tool col-xs-4\">\n                    <i class=\"mdi-action-label-outline\"></i>\n                  </span>\n                  <span class=\"tile-favorite-tool col-xs-4\">\n                    <i class=\"mdi-action-favorite\"></i>\n                  </span>\n                  <span class=\"tile-color-tool col-xs-4\">\n                    <i class=\"mdi-image-brightness-1\"></i>\n                  </span>\n                </header>\n\n                <footer class=\"tile-info\">\n                  <p>{{name}}</p>\n                  <p>{{collections}} collections</p>\n                </footer>\n              </div>\n            </div>\n          {{/if}}\n        {{/each}}\n\n        <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <a href=\"/new-database.html\" class=\"tile-inner plain add\">\n            <i class=\"mdi-content-add\"></i>\n          </a>\n        </div>\n\n\n      </div>\n    </div><!-- END OF FAVORITES -->\n\n\n\n\n</div>\n{{/appState}}");
can.stache('main_components_page-server_db-table_db-table_stache', "<div class=\"table-responsive\">\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Collections</th>\n        <th>Group</th>\n        <th>Size</th>\n      </tr>\n    </thead>\n    <tbody>\n      {{#each databases}}\n        <tr>\n          <td><i class=\"mdi-image-brightness-1\"></i> {{db}} {{#if favorite}}<i class=\"pull-right mdi-action-favorite\"></i>{{/if}}</td>\n          <td>{{collectionCount}} collections</td>\n          <td>{{group}}</td>\n          <td>{{dbSize}}</td>\n        </tr>\n      {{/each}}\n    </tbody>\n  </table>\n</div>");
can.stache('main_components_page-server_db-tile_db-tile_stache', "{{#database}}\n<div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\" can-click=\"selectDB\">\n  <div class=\"tile-inner\">\n\n    <header class=\"tile-tools\">\n      <span class=\"tile-group-tool col-xs-4\">\n        <i class=\"mdi-action-label-outline\"></i>\n      </span>\n      <span class=\"tile-favorite-tool col-xs-4\">\n        <i class=\"mdi-action-favorite\"></i>\n      </span>\n      <span class=\"tile-color-tool col-xs-4\">\n        <i class=\"mdi-image-brightness-1\"></i>\n      </span>\n    </header>\n\n    <footer class=\"tile-info\">\n      <p>{{db}}</p>\n      <p>{{collectionCount}} collections</p>\n    </footer>\n  </div>\n</div>\n{{/database}}");
can.stache('main_components_page-server_page-server_stache', "{{#appState}}\n\n<div class=\"row\">\n\n  <div class=\"col-sm-9 col-md-10\">\n\n    <div class=\"page-header\">\n\n      <div class=\"breadcrumbs\">\n        <a href=\"javascript:void(0)\" can-click=\"goHome\"><i class=\"mdi-action-dns\"></i></a>\n        <span> / </span>\n        <a href=\"javascript:void(0)\" can-click=\"gotoServer\">{{hostname}}</a>\n        <span> / </span>\n\n      </div>\n\n      {{#if hasFavorites}}\n      <h1>Favorites</h1>\n      {{/else}}\n      <h1>Databases</h1>\n      {{/if}}\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right view-toggle text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-list\"></i></a></li>\n          <li class=\"active\"><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-module\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right labels text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-label-outline\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right search text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-search\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- BEGIN FAVORITES -->\n    {{#if hasFavorites}}\n    <div class=\"row\">\n      <div class=\"tiles col-md-12\">\n        {{#each databases}}\n          {{#if favorite}}\n            <db-tile database=\"{.}\"></db-tile>\n          {{/if}}\n        {{/each}}\n\n        <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <a href=\"/new-database.html\" class=\"tile-inner plain add\">\n            <i class=\"mdi-content-add\"></i>\n          </a>\n        </div>\n\n      </div>\n    </div>\n    {{/if}}\n    <!-- END OF FAVORITES -->\n\n\n    <!-- BEGIN TILES -->\n    <div class=\"row\">\n      <div class=\"tiles col-md-12\">\n        {{#if hasFavorites}}\n        <h1>Databases</h1>\n        {{/if}}\n\n        {{#each databases}}\n          {{#unless favorite}}\n            <db-tile database=\"{.}\"></db-tile>\n          {{/if}}\n        {{/each}}\n\n\n        <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <a href=\"/new-database.html\" class=\"tile-inner plain add\">\n            <i class=\"mdi-content-add\"></i>\n          </a>\n        </div>\n\n      </div>\n    </div><!-- END OF TILES -->\n\n    <db-table databases=\"{databases}\"></db-table>\n\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 col-md-2 col-md-offset-10 sidebar\">\n    <server-status></server-status>\n  </div>\n</div>\n{{/appState}}");
can.stache('main_components_page-server_server-status_server-status_stache', "{{loading}}\n\n<h4>Server Status <i class=\"mdi-action-autorenew pull-right {{#if spin}}spinner{{/if}}\" can-click=\"refresh\"></i></h4>\n{{#stats.status}}\n  <dl>\n    <dt>Hostname</dt>\n    <dd>{{host}}</dd>\n\n    <dt>MongoDB Version</dt>\n    <dd>{{version}}</dd>\n\n    <dt>Uptime</dt>\n    <dd>{{secondsHumanize uptime}}</dd>\n\n    <dt>Server Time</dt>\n    <dd>{{localTime}}</dd>\n  </dl>\n\n  {{#connections}}\n  <dl>\n    <dt>Connections</dt>\n    <dd>Current: {{current}}<br/>Available: {{available}}</dd>\n  </dl>\n  {{/connections}}\n\n  {{#opcounters}}\n  <dl>\n    <dt>Operation Counts</dt>\n    <dd>Inserts: {{number insert}} <br/>  Queries: {{number query}} <br/>  Updates: {{number update}} <br/>  Deletes: {{number delete}}</dd>\n  </dl>\n  {{/opcounters}}\n\n  {{#globalLock}}\n    {{#activeClients}}\n    <dl>\n      <dt>Clients</dt>\n      <dd>Active: {{number total}} <br/>  Read Lock: {{number readers}} <br/>  Write Lock: {{number writers}}</dd>\n    </dl>\n    {{/activeClients}}\n\n    {{#currentQueue}}\n    <dl>\n      <dt>Queues</dt>\n      <dd>Operations: {{number total}} <br/>  Read Lock: {{number readers}} <br/>  Write Lock: {{number writers}}</dd>\n    </dl>\n    {{/currentQueue}}\n  {{/globalLock}}\n\n  {{#backgroundFlushing}}\n  <dl>\n    <dt>Flush Count</dt>\n    <dd>{{number flushes}}</dd>\n\n    <dt>Last Flush</dt>\n    <dd>{{last_finished}}</dd>\n\n    <dt>Time Spent</dt>\n    <dd>{{last_ms}} ms</dd>\n\n    <dt>Average Time</dt>\n    <dd>{{number average_ms 4}} ms</dd>\n  </dl>\n  {{/backgroundFlushing}}\n\n{{/stats}}");
can.stache('main_components_servers-sidebar_servers-sidebar_stache', "{{#appState}}\n\n<h4>Servers <i class=\"mdi-content-add pull-right\" data-toggle=\"modal\" data-target=\"#addServerModal\"></i></h4>\n<ul class=\"list-unstyled\">\n  {{#servers}}\n  <li can-click=\"selectServer\">\n    <p class=\"hostname\">{{name}}</p>\n    <p class=\"type\">{{type}}</p>\n  </li>\n  {{/servers}}\n</ul>\n\n{{/appState}}\n\n");
can.stache('main_components_task-module_task-module_stache', "{{#task}}\n<form can-submit=\"saveTask\">\n<input type=\"text\" placeholder=\"description\" can-value=\"description\"><button>Save</button>\n</form>\n{{/task}}\n\n<div>\n{{#each tasks}}\n  <span contenteditable\n  \tcan-value=\"description\"\n  \tcan-blur=\"updateTask\"\n  \tcan-keypress=\"noNewline\">\n  \t</span> <a class=\"pull-right\" can-click=\"deleteTask\">x</a><br/>\n{{/each}}\n</div>");
can.stache('main_components_todo-module_todo-module_stache', "{{#todo}}\n<form can-submit=\"saveTodo\">\n<input type=\"text\" placeholder=\"description\" can-value=\"description\"><button>Save</button>\n</form>\n{{/todo}}\n\n<div>\n{{#each todos}}\n  <span contenteditable\n  \tcan-value=\"description\"\n  \tcan-blur=\"updateTodo\"\n  \tcan-keypress=\"noNewline\">\n  \t</span> <a class=\"pull-right\" can-click=\"deleteTodo\">x</a><br/>\n{{/each}}\n</div>");
can.stache('main_site_stache', "<nav class=\"navbar navbar-default navbar-fixed-top bg-700\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand\" href=\"/#!\">Amity</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"navbar-select dropdown\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-toggle withripple\" data-toggle=\"dropdown\">mma-db <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">bchm</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">bchm-old</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">e-store</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">feathers</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">kardon-db</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">mma-db</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">tv-guide</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"icon-only\"><a href=\"#\"><i class=\"mdi-action-help\"></i> </a></li>\n        <li class=\"icon-only\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-toggle withripple\" data-toggle=\"dropdown\"><i class=\"mdi-action-account-box\"></i></a>\n          <ul class=\"dropdown-menu\">\n              <li><a href=\"javascript:void(0)\">Users</a></li>\n              <li><a href=\"javascript:void(0)\">Logout</a></li>\n          </ul>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<!-- CONTENT -->\n<div id=\"content\" class=\"container-fluid main\"> </div>\n\n<add-server></add-server>"); 
})(this);