/*
 * File: app/store/Contacts.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtMVC.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [
        'ExtMVC.model.Contact',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'ExtMVC.model.Contact',
            storeId: 'contactsStore',
            pageSize: 35,
            proxy: {
                type: 'ajax',
                url: 'http://localhost/blog/projects/extjs-sencha-touch-sameproject/php/listaContatos.php',
                reader: {
                    type: 'json',
                    root: 'contacts'
                }
            }
        }, cfg)]);
    }
});