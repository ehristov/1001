WAF.define('Container', ['waf-core/widget'], function(widget) {
    "use strict";

    var Container = widget.create('Container', {
        init: function() {
            this.removeClass('well well-sub');
            if($(this.node).closest('.well').length > 0){
                this.addClass('well-sub');
            }
            else{
                this.addClass('well');
            }
        }
    });
    Container.inherit(WAF.require('waf-behavior/layout/container'));
    
    return Container;
});
