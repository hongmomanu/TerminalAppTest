Ext.define('MyApp.store.Contacts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyApp.model.Contact',
        autoLoad: true,
        //sorters: 'firstName',
        /*grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },*/
        proxy: {
            type: 'ajax',
            url: 'resources/data/contacts.json'
        }
    }
});
