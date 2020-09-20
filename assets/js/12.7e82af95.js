(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(e,a,s){"use strict";s.r(a);var t=s(42),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"administering-your-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#administering-your-website"}},[e._v("#")]),e._v(" Administering your website")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#updating-pixelfed"}},[e._v("Updating Pixelfed")])]),s("li",[s("a",{attrs:{href:"#artisan-commands"}},[e._v("Artisan commands")]),s("ul",[s("li",[s("a",{attrs:{href:"#user-management"}},[e._v("User management")])]),s("li",[s("a",{attrs:{href:"#fix-accounts-with-reserved-names"}},[e._v("Fix accounts with reserved names")])]),s("li",[s("a",{attrs:{href:"#remove-unused-media"}},[e._v("Remove unused media")])])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"updating-pixelfed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-pixelfed"}},[e._v("#")]),e._v(" Updating Pixelfed")]),e._v(" "),s("p",[e._v("After you have installed Pixelfed, you may update to the latest commits by pulling the dev branch and doing necessary updates/migration/caching:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/pixelfed\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nphp artisan config:cache\nphp artisan route:cache\nphp artisan migrate --force\n")])])]),s("h2",{attrs:{id:"artisan-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artisan-commands"}},[e._v("#")]),e._v(" Artisan commands")]),e._v(" "),s("h3",{attrs:{id:"user-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[e._v("#")]),e._v(" User management")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("user:admin")]),e._v("\tMake a user an admin, or remove admin privileges.")]),e._v(" "),s("li",[s("code",[e._v("user:create")]),e._v("\tCreate a new user\nuser:delete\tDelete account")]),e._v(" "),s("li",[s("code",[e._v("user:show")]),e._v("\tShow user info")]),e._v(" "),s("li",[s("code",[e._v("user:suspend")]),e._v("\tSuspend a local user.")]),e._v(" "),s("li",[s("code",[e._v("user:unsuspend")]),e._v("\tUnsuspend a local user.")]),e._v(" "),s("li",[s("code",[e._v("user:table")]),e._v("\tDisplay latest users")])]),e._v(" "),s("p",[e._v("For example, you can give a user the admin role with the following command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("php artisan user:admin username_here\n")])])]),s("h3",{attrs:{id:"fix-accounts-with-reserved-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fix-accounts-with-reserved-names"}},[e._v("#")]),e._v(" Fix accounts with reserved names")]),e._v(" "),s("p",[e._v("You can run this command to fix accounts created before that username was reserved.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("php artisan fix:usernames\n")])])]),s("h3",{attrs:{id:"remove-unused-media"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-unused-media"}},[e._v("#")]),e._v(" Remove unused media")]),e._v(" "),s("p",[e._v("With this command you can trigger the garbage collection on the media files. This frees up disk space. All files being older than one hour and which are not used in any status are removed.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("php artisan media:gc\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);