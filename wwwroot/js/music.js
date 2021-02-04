﻿$(document).ready(function () {

    var wavesurfer = WaveSurfer.create({
        container: '#music_player'
    });

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

    var volume = 0.5;
    wavesurfer.setVolume(volume);

    $('#songTable tbody').on('click', '.SongItemPlay', function () {
        var path = $(this).attr('data-path');
        var title = $(this).attr('data-title');
        var artist = $(this).attr('data-artist');


        $("#player").removeAttr('hidden');
        $('#play_button').text('pause');
        wavesurfer.play();

        $('#mute_button').text('volume_off');
        wavesurfer.setMute(false)


        $("#title_player").text(title + " - " + artist)
        wavesurfer.load('songs/' + path);
    });

    // Button Play / Pause
    $('#play_button').click(function () {
        if ($(this).text() == 'pause') {
            $(this).text('play_arrow')
        }
        else {
            $(this).text('pause')
        }
        wavesurfer.playPause();
    })

    // Button Mute / Unmute
    $('#mute_button').click(function () {
        if ($(this).text() == 'volume_off') {
            $(this).text('volume_up')
            wavesurfer.setMute(true)
        }
        else {
            $(this).text('volume_off')
            wavesurfer.setMute(false)
        }
    })

    // Volume Up / Down
    $('#more_volume').click(function () {
        if (volume < 0.9) {
            volume += 0.1;
        }
        wavesurfer.setVolume(volume);
    })
    $('#less_volume').click(function () {
        if (volume > 0.1) {
            volume -= 0.1;
        }
        wavesurfer.setVolume(volume);
    })




});