'use strict';
import createjs from 'createjs';
export default function() {
    const stage = new createjs.Stage("myCanvas");
    const queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
        {id: "bg", src: "../image/bg.svg", type: createjs.Types.IMAGE},
        {id: 'cat', src: '../image/cat.jpg', type: createjs.Types.IMAGE}
    ]);


    function handleComplete() {
        console.log('hoge111');
        const bmp = new createjs.Bitmap(queue.getResult('bg'));
        bmp.scaleX = 0.5;
        bmp.scaleY = 0.5;
        stage.addChild(new createjs.Bitmap(queue.getResult('cat')));
        stage.addChild(bmp);
        stage.update();

        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.addEventListener("tick", scaleUp);

        function handleTick(){
            bmp.x += 1;
            stage.update();
        }

        function scaleUp() {
            bmp.scaleX += 0.005;
            bmp.scaleY += 0.005;
            if(bmp.scaleX >= 1) {
                createjs.Ticker.removeEventListener('tick', scaleUp);
            }
        }
    }

}
