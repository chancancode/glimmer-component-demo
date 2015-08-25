import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-lg', 'btn-primary', 'btn-block'],
  ariaRole: 'button',
  attributeBindings: ['type'],
  type: 'button'
});
