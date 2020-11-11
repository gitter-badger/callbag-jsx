/* tslint:disable: no-magic-numbers */
/* tslint:disable: no-unused-expression */
/* tslint:disable: newline-before-return */


import { should, expect } from 'chai'; should();
import { LiveDOMRenderer } from 'render-jsx/dom';
import { CallbagStylePlugin } from '../style.plugin';
import { testCallbagStyleSupport } from './spec/style.spec';


describe('CallbagStylePlugin', () => {
  testCallbagStyleSupport(
    (dom, ...plugins) => new LiveDOMRenderer(dom, ...plugins, () => new CallbagStylePlugin()),
  );
});
