import getChildProps from './getChildProps';
import getChildListeners from './getChildListeners';
import getElementType from './getElementType';
import { num, classes } from './utils';
import ajax from '../../ajax';
import { defaultsDeep, get } from '../../underscore';
import api from './api';

export const VueXolasUIMixin = {
  inject: {
    _xui: {
      from: 'xui',
      default() {
        return {
          api: {},
        };
      },
    },
  },
  props: {
    xui: {
      type: Object,
      default() {
        return {
          api: defaultsDeep(this._xui ? this._xui.api : {}, api),
        };
      },
    },
  },
  methods: {
    num,
    classes,
    getEndpoint(action, params) {
      const path = get(this.xui, `api.api.${action}`);

      if (!path) {
        throw new Error(`Action '${action}' not provided`);
      }

      const baseUrl = get(this.xui, 'api.base', '');
      const endpoint = `${baseUrl}${path}`;
      return Object.keys(params).reduce(
        (url, key) => url.replace(`{${key}}`, params[key]),
        endpoint,
      );
    },
    executeAction(action, params) {
      let promise = ajax(this.xui.api.method, action, params);
      if (this.xui.api.onResponse) {
        promise = promise.then(this.xui.api.onResponse);
      }
      return promise;
    },
    getElementType,
    getChildProps,
    getChildListeners,
    getChildPropsAndListeners() {
      const props = this.getChildProps();
      const listeners = this.getChildListeners();
      return {
        props,
        attrs: props,
        on: listeners,
      };
    },
  },
};
