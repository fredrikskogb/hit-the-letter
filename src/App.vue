<template>
  <div id="app">
	<!-- Send logged in status to all routered components through props -->
    <router-view :loggedIn="getLoggedInStatus"/>
	<BackgroundImage></BackgroundImage>
  </div>
</template>

<script lang="ts">

	import Vue from 'vue'
	import BackgroundImage from '@/components/layout/BackgroundImage.vue';
	import { mapGetters } from 'vuex';

	/* To let TypeScript properly infer types inside Vue component options,
		you need to define components with Vue.component or Vue.extend. */
	export default Vue.extend({
		data() {
			return {
				
			}
		},
		components: {
			BackgroundImage 
		},
		computed: mapGetters(['getLoggedInStatus']),
	})

</script>

<style lang="less">

/* General styling */

@import url('./styles/main.less');

html {
	color: @text-color;
	font-family: 'Tomorrow', sans-serif;
}

a {
	.text-styling;
	color: @link-color;
}



/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

</style>
