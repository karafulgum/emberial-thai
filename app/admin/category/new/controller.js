import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(name) {
      // Really cheap validation
      if (name) {
        // Creates a project record LOCALLY
        const category = this.store.createRecord('menu-category', { name });
        // Save the new project to the server
        category.save()
        .then(() => {
          alert('Category saved!');
          // Transition back
          this.transitionToRoute('admin.category.index');
          // In vue this.$router.push(( name: 'project index'))
        });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
