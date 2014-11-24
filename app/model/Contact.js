Ext.define('MyApp.model.Contact', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'firstName',
            'lastName',
            'headshot',
            'title',
            'telephone',
            'city',
            'state',
            'country',
            'latitude',
            'longitude'
        ]
    }
});
