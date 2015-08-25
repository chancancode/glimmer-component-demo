import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  isSubmitting: false,

  click(e) {
    e.preventDefault();
    this.set('isSubmitting', true);
  }
});
