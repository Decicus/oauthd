var me = {
    fetch: [
        function() {
            return 'https://api.patreon.com/oauth2/api/current_user';
        }
    ],
    params: {},
    fields: {
        id: function(me) {
            return me.data.attributes.id;
        },
        email: function(me) {
            return me.data.attributes.email;
        },
        fullName: function(me) {
            return me.data.attributes.full_name;
        },
        avatar: function(me) {
            return me.data.attributes.image_url;
        },
        url: function(me) {
            return me.data.attributes.url;
        },
        vanity: function(me) {
            return me.data.attributes.vanity;
        }
    }
};

module.exports = me;