"use strict";(self.webpackChunkhacktuts=self.webpackChunkhacktuts||[]).push([[9085],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,h=d["".concat(c,".").concat(g)]||d[g]||l[g]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={tags:["password reset"],title:"Changing user passwords",image:"img/Portswigger/authentication.png"},c=void 0,u={unversionedId:"penetration-testing/Authentication/changing-user-password",id:"penetration-testing/Authentication/changing-user-password",title:"Changing user passwords",description:"Changing user passwords",source:"@site/docs/penetration-testing/Authentication/changing-user-password.md",sourceDirName:"penetration-testing/Authentication",slug:"/penetration-testing/Authentication/changing-user-password",permalink:"/CyberSecurityTutorials/docs/penetration-testing/Authentication/changing-user-password",draft:!1,tags:[{label:"password reset",permalink:"/CyberSecurityTutorials/docs/tags/password-reset"}],version:"current",frontMatter:{tags:["password reset"],title:"Changing user passwords",image:"img/Portswigger/authentication.png"},sidebar:"tutorialSidebar",previous:{title:"Bypassing 2 Factor Authentication",permalink:"/CyberSecurityTutorials/docs/penetration-testing/Authentication/bypassing-2fa"},next:{title:"Password based login part-1",permalink:"/CyberSecurityTutorials/docs/penetration-testing/Authentication/password-based-login-1"}},p={},l=[{value:"Changing user passwords",id:"changing-user-passwords",level:2},{value:"Lab: Password brute-force via password change",id:"lab-password-brute-force-via-password-change",level:2}],d={toc:l};function g(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"changing-user-passwords"},"Changing user passwords"),(0,s.kt)("p",null,"Typically, changing your password involves entering your current password and then the new password twice. These pages fundamentally rely on the same process for checking that usernames and current passwords match as a normal login page does. Therefore, these pages can be vulnerable to the same techniques."),(0,s.kt)("p",null,"Password change functionality can be particularly dangerous if it allows an attacker to access it directly without being logged in as the victim user. For example, if the username is provided in a hidden field, an attacker might be able to edit this value in the request to target arbitrary users. This can potentially be exploited to enumerate usernames and brute-force passwords."),(0,s.kt)("h2",{id:"lab-password-brute-force-via-password-change"},"Lab: Password brute-force via password change"),(0,s.kt)("p",null,"This lab's password change functionality makes it vulnerable to brute-force attacks. To solve the lab, use the list of candidate passwords to brute-force Carlos's account and access his \"My account\" page."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Your credentials: ",(0,s.kt)("inlineCode",{parentName:"li"},"wiener:peter")),(0,s.kt)("li",{parentName:"ul"},"Victim's username: ",(0,s.kt)("inlineCode",{parentName:"li"},"carlos"))),(0,s.kt)("p",null,"--\x3e In this lab, After login you can change your current password So i entered the correct password in ",(0,s.kt)("inlineCode",{parentName:"p"},"current password")," and entered 2 new passwords and intercepted it and i found that there are 4 parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1.username\n2.current-password\n3.new-password-1\n4.new-password-2\n")),(0,s.kt)("p",null,"--\x3e So I brute forced it to check what we can get and i got ",(0,s.kt)("inlineCode",{parentName:"p"},"302")," on all the requests So this trick didn't worked :("),(0,s.kt)("p",null,"So then I again went to the website and noticed that when we enter the wrong current password and correct new passwords 2 times then it's redirecting us to login page and when we add the correct password and 2 different new passwords then it's giving us this error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"New passwords do not match\n")),(0,s.kt)("p",null,"And if we enter the wrong ",(0,s.kt)("inlineCode",{parentName:"p"},"current-password")," and 2 different new passwords then we get this error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Current password is incorrect\n")),(0,s.kt)("p",null,"So now we can conclude that if we brute force the current password with 2 different new passwords then if we get ",(0,s.kt)("inlineCode",{parentName:"p"},"New passwords do not match")," Error then the password is correct so let's try it!"),(0,s.kt)("p",null,"We can grep it but here I got the difference with content-length!"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Don't forget to change the username to ",(0,s.kt)("inlineCode",{parentName:"p"},"carlos"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6370).Z,width:"1513",height:"531"})),(0,s.kt)("p",null,"And we got different content length for ",(0,s.kt)("inlineCode",{parentName:"p"},"iloveyou")," password"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3772).Z,width:"1325",height:"895"})),(0,s.kt)("p",null,"So let's try to login!"),(0,s.kt)("p",null,"And we solved the lab!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7914).Z,width:"1699",height:"507"})))}g.isMDXComponent=!0},6370:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140028-8a1ef02c1095a2a0f3d998c717dafb8a.png"},3772:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140306-c6d204d6204ec8884b654286a2ae18b5.png"},7914:function(e,t,n){t.Z=n.p+"assets/images/Pastedimage20220208140528-19b30c64c44c90145a579f8ef83e8f2d.png"}}]);