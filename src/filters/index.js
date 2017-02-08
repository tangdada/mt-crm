import Vue from 'vue'

Vue.filter('empty', function (value) { return value == '' ? '无' : value});
