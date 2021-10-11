new counterside.countersidePlayer("player-container", {
	jsonUrl: "../assets/UNIT_ILLUST_ACADEMY_C_TWINTAIL/UNIT_ILLUST_C_DAYMINE_HYUNSOO.json",
	atlasUrl: "../assets/UNIT_ILLUST_ACADEMY_C_TWINTAIL/UNIT_ILLUST_C_DAYMINE_HYUNSOO.atlas",
    alpha: true,
    backgroundColor: "#00000000",
    premultipliedAlpha: true,
    viewport: {
        x: -500,
        y: -1500,
        width: 1200,
        height: 1200,
        padLeft: "60%",
        padRight: "60%",
        padTop: "55%",
        padBottom: "200%"
     },
    animation: "IDLE"
    // success: function (player) {
    //     player.animationState.setAnimation(0, "PRIDE");
    //     player.animationState.addAnimation(0, "TOUCH", true, 0);
    //     player.animationState.addAnimation(0, "SURPRISE", true, 0);
    //     player.animationState.addAnimation(0, "SERIOUS", true, 0);
    //     player.animationState.addAnimation(0, "LAUGH", true, 0);
    //     player.animationState.addAnimation(0, "HATE", true, 0);
    //     player.animationState.addAnimation(0, "IDLE", true, 0);
    //  },
    //  showControls: false
});