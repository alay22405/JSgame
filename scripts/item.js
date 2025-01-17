"use strict";

class Item extends Entity {
    /**
     * Creates a new item.
     * @param {Vec2} pos
     * @param {HTMLImageElement} sprite of the item.
     * @param {Dimension} size
     * @param lightSource a light source object to attach to this item, light source will be removed with this item.
     */
    constructor(pos, sprite, size, lightSource = null) {
        super(pos, size);
        Object.assign(this, {sprite, size, lightSource});

        if(lightSource) {
            lightSource.attachTo = this;
            lightMap.addLightSource(lightSource);
        }
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.getScreenPos().x, this.getScreenPos().y,
            this.size.w, this.size.h);
    }

    update() {
        if(this.removeFromWorld) {
            if(this.lightSource) {
                lightMap.removeLightSource(this.lightSource);
            }

        }
    }
}