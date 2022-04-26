var myFP = fluidPlayer("video", {
  layoutControls: {
    controlBar: {
      autoHideTimeout: 3,
      animated: true,
      autoHide: true,
    },
    htmlOnPauseBlock: {
      html: null,
      height: null,
      width: null,
    },
    autoPlay: false,
    mute: true,
    allowTheatre: true,
    playPauseAnimation: true,
    playbackRateEnabled: false,
    allowDownload: false,
    playButtonShowing: true,
    fillToContainer: false,
    posterImage: "",
  },
  vastOptions: {
    adList: [],
    adCTAText: false,
    adCTATextPosition: "",
  },
});
