ig.module('game.entities.transporter')
    .requires('impact.entity', 'plugins.entities.transporter')
    .defines(function() {
        EntityTransporter = EntityBaseTransporter.extend({
            animSheet: new ig.AnimationSheet('media/dorm-tiles.png', 16, 8),
            size: {x: 16, y: 8},
            className: 'EntityTransporter'
        });
    });