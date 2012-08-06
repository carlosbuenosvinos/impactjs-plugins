ig.module('plugins.entities.transporter')
.requires('impact.entity')
.defines(function() {
    EntityBaseTransporter = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.A,
        _wmDrawBox: true,
        _wmColor: 'rgba(255, 0, 0, 0.7)',
        size: {x: 8, y: 8},
        transportTo: '',
        check: function(other) {
            var self = this;
            if (other instanceof EntityPlayer) {
                if (this.transportTo !== '') {
                    var transportTo = ig.game.getEntityByName(this.transportTo);
                    if (transportTo) {
                        var leftMargin = (transportTo.size.x - other.size.x) / 2;
                        other.pos.x = transportTo.pos.x + leftMargin;
                        other.pos.y = transportTo.pos.y - other.size.y - 1;
                    }
                }
            }
        }
    });
});