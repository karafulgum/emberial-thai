import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transitionToRoute('admin.category.detail', this.get('model.menuCategory.id'));
        });
      },
    },
  });

//     if (formValues) {
//       const newMenuItem = this.store.createRecord('menu-item', formValues);
//
//       newMenuItem.save()
//       .then(() => {
//         alert('Menu item has been updated!');
//
//         this.transitionToRoute('admin.category.detail');
//       });
//     } else {
//       alert('Menu item cannot be saved');
//     }
//   }
// }});
