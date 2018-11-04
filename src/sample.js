'use strict';
import createjs from 'createjs';
export default function() {
    const stage = new createjs.Stage("myCanvas");
    const queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
        {id: "bg", src: "../image/bg.svg", type: createjs.Types.IMAGE}
    ]);

    function handleComplete() {
        const bmp = new createjs.Bitmap(queue.getResult('bg'));
        stage.addChild(bmp);
        stage.update();
    }

}
