/*
 * File: app/view/contact/Details.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtMVC.view.contact.Details', {
    extend: 'Ext.Panel',
    alias: 'widget.contactdetails',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.XTemplate'
    ],

    config: {
        tpl: [
            '<h4>{name}</h4>',
            '<div class="field"><span class="label">Phone: </span>{phone}</div>',
            '<div class="field"><span class="label">Email: </span>{email}</div>'
        ],
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contact Details',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'back',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            }
        ]
    }

});